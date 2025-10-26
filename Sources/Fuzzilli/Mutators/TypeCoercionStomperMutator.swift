// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import Foundation

/// A stateful mutator that targets various type transitions to break JIT guards and IC assumptions.
/// 
/// This mutator identifies variables and injects operations that force type transitions between
/// different JavaScript representations: Smi, Double, Float32, BigInt, NaN, Infinity, -0, etc.
/// This can help break JIT compiler optimizations, inline cache assumptions, and type coercion logic.
public class TypeCoercionStomperMutator: Mutator {
    
    /// Tracks variable usage patterns to identify candidates for type transitions
    private var variableUsageTracker = VariableUsageTracker()
    
    public init(maxSimultaneousMutations: Int = 3) {
        super.init(name: "TypeCoercionStomperMutator")
    }
    
    override func mutate(_ program: Program, using b: ProgramBuilder, for fuzzer: Fuzzer) -> Program? {
        b.traceHeader("TypeCoercionStomperMutator: Analyzing variable usage patterns")
        
        // Reset tracker for this program
        variableUsageTracker = VariableUsageTracker()
        
        // First pass: analyze variable usage patterns
        for instr in program.code {
            variableUsageTracker.analyze(instr)
        }
        
        // Find candidates for type transitions
        var candidates: [(Variable, TransitionType)] = []
        for (variable, usage) in variableUsageTracker.variableUsage {
            let usageScore = calculateUsageDiversity(usage)
            if usageScore > 0 {
                let transitionType = determineTransitionType(usage)
                candidates.append((variable, transitionType))
            }
        }
        
        guard !candidates.isEmpty else {
            b.trace("No suitable candidates found for type coercion transitions")
            return nil
        }
        
        b.trace("Found \(candidates.count) candidates for type coercion transitions")
        
        // Select variables to mutate
        let numMutations = min(3, candidates.count)
        let selectedCandidates = Array(candidates.shuffled().prefix(numMutations))
        
        // Second pass: apply mutations
        b.adopting(from: program) {
            for instr in program.code {
                b.adopt(instr)
                
                // Check if this instruction uses any of our selected variables
                for (variable, transitionType) in selectedCandidates {
                    if instr.inputs.contains(variable) {
                        // 변이를 적용하기 전에 변수가 유효한지 확인
                        b.trace("Would inject \(transitionType) transition for variable \(variable)")
                        // 실제 변이는 일단 주석 처리
                        // injectTypeTransition(for: variable, transitionType: transitionType, using: b)
                    }
                }
            }
        }
        
        return b.finalize()
    }
    
    
    /// Calculates how diverse the variable usage is
    private func calculateUsageDiversity(_ usage: VariableUsage) -> Int {
        var score = 0
        
        // Base score for any usage
        if usage.hasLoadInteger || usage.hasLoadFloat || usage.hasIntegerOperations || usage.hasFloatOperations {
            score += 1
        }
        
        // Bonus for mixed usage
        let hasIntegerUsage = usage.hasIntegerOperations || usage.hasLoadInteger
        let hasFloatUsage = usage.hasFloatOperations || usage.hasLoadFloat
        
        if hasIntegerUsage && hasFloatUsage {
            score += 3  // High bonus for mixed usage
        } else if hasIntegerUsage || hasFloatUsage {
            score += 1  // Low bonus for single type usage
        }
        
        // Bonus for recent usage diversity
        if usage.recentIntegerUsage > 0 && usage.recentFloatUsage > 0 {
            score += 2
        }
        
        return score
    }
    
    /// Determines the best transition type based on usage patterns
    private func determineTransitionType(_ usage: VariableUsage) -> TransitionType {
        let hasIntegerUsage = usage.hasIntegerOperations || usage.hasLoadInteger
        let hasFloatUsage = usage.hasFloatOperations || usage.hasLoadFloat
        
        // If both types used, choose based on recent usage
        if hasIntegerUsage && hasFloatUsage {
            if usage.recentFloatUsage > usage.recentIntegerUsage {
                return .toSmi
            } else {
                return .toDouble
            }
        }
        
        // If only one type used, choose opposite
        if hasIntegerUsage {
            return .toDouble
        } else if hasFloatUsage {
            return .toSmi
        }
        
        // Default to random type
        return probability(0.5) ? .toSmi : .toDouble
    }
    
    /// Calculates confidence score for a transition
    private func calculateConfidence(_ usage: VariableUsage, _ transitionType: TransitionType) -> Int {
        var confidence = 1
        
        // Base confidence from usage diversity
        confidence += calculateUsageDiversity(usage)
        
        // Additional confidence for specific patterns
        switch transitionType {
        case .toSmi:
            if usage.hasFloatOperations {
                confidence += 2
            }
        case .toDouble:
            if usage.hasIntegerOperations {
                confidence += 2
            }
        case .toFloat32:
            confidence += 1
        case .toBigInt:
            confidence += 1
        case .toNaN:
            confidence += 1
        case .toInfinity:
            confidence += 1
        case .toNegativeZero:
            confidence += 1
        }
        
        return confidence
    }
    
    /// Injects type transition operations for a variable
    private func injectTypeTransition(for variable: Variable, transitionType: TransitionType, using b: ProgramBuilder) {
        b.trace("Injecting \(transitionType) transition for variable \(variable)")
        
        switch transitionType {
        case .toDouble:
            injectDoubleTransition(for: variable, using: b)
        case .toSmi:
            injectSmiTransition(for: variable, using: b)
        case .toFloat32:
            injectFloat32Transition(for: variable, using: b)
        case .toBigInt:
            injectBigIntTransition(for: variable, using: b)
        case .toNaN:
            injectNaNTransition(for: variable, using: b)
        case .toInfinity:
            injectInfinityTransition(for: variable, using: b)
        case .toNegativeZero:
            injectNegativeZeroTransition(for: variable, using: b)
        }
    }
    
    /// Injects operations that convert a variable to Double representation
    private func injectDoubleTransition(for variable: Variable, using b: ProgramBuilder) {
        let transitionType = chooseUniform(from: DoubleTransitionType.allCases)
        
        switch transitionType {
        case .addSmallFloat:
            // x += 0.1 (forces double representation)
            let smallFloat = b.loadFloat(0.1)
            let result = b.binary(variable, smallFloat, with: .Add)
            // reassign 대신 새로운 변수 생성
            let newVar = b.nextVariable()
            b.reassign(newVar, to: result)
            
        case .mathFround:
            // x = Math.fround(x) + 0.5 (forces double representation)
            let math = b.createNamedVariable(forBuiltin: "Math")
            let froundResult = b.callMethod("fround", on: math, withArgs: [variable])
            let half = b.loadFloat(0.5)
            let result = b.binary(froundResult, half, with: .Add)
            b.reassign(variable, to: result)
            
        case .divisionByZero:
            // x = 1/0 (creates Infinity, forces double)
            let one = b.loadFloat(1.0)
            let zero = b.loadFloat(0.0)
            let result = b.binary(one, zero, with: .Div)
            b.reassign(variable, to: result)
            
        case .nanAssignment:
            // x = NaN (forces double representation)
            let nan = b.loadFloat(Double.nan)
            b.reassign(variable, to: nan)
            
        case .loadDouble:
            // x = randomDouble (direct double assignment)
            let randomDouble = b.loadFloat(b.randomFloat())
            b.reassign(variable, to: randomDouble)
        }
    }
    
    /// Injects operations that convert a variable to Smi representation
    private func injectSmiTransition(for variable: Variable, using b: ProgramBuilder) {
        let transitionType = chooseUniform(from: SmiTransitionType.allCases)
        
        switch transitionType {
        case .bitwiseOr:
            // x = x | 0 (forces integer representation)
            let zero = b.loadInt(0)
            let result = b.binary(variable, zero, with: .BitOr)
            b.reassign(variable, to: result)
            
        case .doubleNot:
            // x = ~~x (double bitwise NOT, forces integer)
            let notResult = b.unary(.BitwiseNot, variable)
            let doubleNotResult = b.unary(.BitwiseNot, notResult)
            b.reassign(variable, to: doubleNotResult)
            
        case .zeroAssignment:
            // x = 0 (direct integer assignment)
            let zero = b.loadInt(0)
            b.reassign(variable, to: zero)
            
        case .loadInteger:
            // x = randomInteger (direct integer assignment)
            let randomInt = b.loadInt(b.randomInt())
            b.reassign(variable, to: randomInt)
            
        case .truncate:
            // x = Math.trunc(x) (truncates to integer)
            let math = b.createNamedVariable(forBuiltin: "Math")
            let truncResult = b.callMethod("trunc", on: math, withArgs: [variable])
            b.reassign(variable, to: truncResult)
        }
    }
    
    /// Injects operations that convert a variable to Float32 representation
    private func injectFloat32Transition(for variable: Variable, using b: ProgramBuilder) {
        let transitionType = chooseUniform(from: Float32TransitionType.allCases)
        
        switch transitionType {
        case .mathFround:
            // x = Math.fround(x) (forces Float32 representation)
            let froundResult = b.callMethod("fround", on: b.createNamedVariable(forBuiltin:"Math"), withArgs: [variable])
            b.reassign(variable, to: froundResult)
            
        case .float32Operation:
            // x = x * 1.0 (Float32 operation)
            let one = b.loadFloat( 1.0)
            let result = b.binary(variable, one, with: .Mul)
            b.reassign(variable, to: result)
            
        case .loadFloat32:
            // x = randomFloat32 (direct Float32 assignment)
            let randomFloat32 = b.loadFloat(Double(b.randomFloat()))
            b.reassign(variable, to: randomFloat32)
            
        case .toInt32AndBack:
            // x = Math.fround(Math.floor(x)) (Float32 via Int32)
            let floorResult = b.callMethod("floor", on: b.createNamedVariable(forBuiltin:"Math"), withArgs: [variable])
            let froundResult = b.callMethod("fround", on: b.createNamedVariable(forBuiltin:"Math"), withArgs: [floorResult])
            b.reassign(variable, to: froundResult)
        }
    }
    
    /// Injects operations that convert a variable to BigInt representation
    private func injectBigIntTransition(for variable: Variable, using b: ProgramBuilder) {
        let transitionType = chooseUniform(from: BigIntTransitionType.allCases)
        
        switch transitionType {
        case .bigIntConstructor:
            // x = BigInt(Math.floor(x)) (converts to BigInt)
            let floorResult = b.callMethod("floor", on: b.createNamedVariable(forBuiltin:"Math"), withArgs: [variable])
            let bigIntResult = b.callFunction(b.createNamedVariable(forBuiltin:"BigInt"), withArgs: [floorResult])
            b.reassign(variable, to: bigIntResult)
            
        case .bigIntOperation:
            // x = BigInt(x) + 1n (BigInt operation)
            let bigIntResult = b.callFunction(b.createNamedVariable(forBuiltin:"BigInt"), withArgs: [variable])
            let one = b.loadBigInt( 1)
            let result = b.binary(bigIntResult, one, with: .Add)
            b.reassign(variable, to: result)
            
        case .loadBigInt:
            // x = randomBigInt (direct BigInt assignment)
            let randomBigInt = b.loadBigInt( b.randomInt())
            b.reassign(variable, to: randomBigInt)
            
        case .bigIntFromString:
            // x = BigInt("42") (BigInt from string)
            let bigIntString = b.loadString( String(b.randomInt()))
            let bigIntResult = b.callFunction(b.createNamedVariable(forBuiltin:"BigInt"), withArgs: [bigIntString])
            b.reassign(variable, to: bigIntResult)
        }
    }
    
    /// Injects operations that convert a variable to NaN
    private func injectNaNTransition(for variable: Variable, using b: ProgramBuilder) {
        let transitionType = chooseUniform(from: NaNTransitionType.allCases)
        
        switch transitionType {
        case .nanAssignment:
            // x = NaN (direct NaN assignment)
            let nan = b.loadFloat( Double.nan)
            b.reassign(variable, to: nan)
            
        case .divisionByZero:
            // x = 0/0 (creates NaN)
            let zero = b.loadFloat( 0.0)
            let result = b.binary(zero, zero, with: .Div)
            b.reassign(variable, to: result)
            
        case .mathNaN:
            // x = Number.NaN (via Number constructor)
            let nanResult = b.getProperty("NaN", of: b.createNamedVariable(forBuiltin:"Number"))
            b.reassign(variable, to: nanResult)
            
        case .parseIntNaN:
            // x = parseInt("not a number") (creates NaN)
            let invalidString = b.loadString( "not a number")
            let nanResult = b.callFunction(b.createNamedVariable(forBuiltin:"parseInt"), withArgs: [invalidString])
            b.reassign(variable, to: nanResult)
        }
    }
    
    /// Injects operations that convert a variable to Infinity
    private func injectInfinityTransition(for variable: Variable, using b: ProgramBuilder) {
        let transitionType = chooseUniform(from: InfinityTransitionType.allCases)
        
        switch transitionType {
        case .divisionByZero:
            // x = 1/0 (creates Infinity)
            let one = b.loadFloat( 1.0)
            let zero = b.loadFloat( 0.0)
            let result = b.binary(one, zero, with: .Div)
            b.reassign(variable, to: result)
            
        case .infinityAssignment:
            // x = Infinity (direct Infinity assignment)
            let infinity = b.loadFloat( Double.infinity)
            b.reassign(variable, to: infinity)
            
        case .mathInfinity:
            // x = Number.POSITIVE_INFINITY (via Number constructor)
            let infinityResult = b.getProperty("POSITIVE_INFINITY", of: b.createNamedVariable(forBuiltin:"Number"))
            b.reassign(variable, to: infinityResult)
            
        case .negativeInfinity:
            // x = -Infinity (negative infinity)
            let negInfinity = b.loadFloat( -Double.infinity)
            b.reassign(variable, to: negInfinity)
        }
    }
    
    /// Injects operations that convert a variable to -0
    private func injectNegativeZeroTransition(for variable: Variable, using b: ProgramBuilder) {
        let transitionType = chooseUniform(from: NegativeZeroTransitionType.allCases)
        
        switch transitionType {
        case .negativeZeroAssignment:
            // x = -0 (direct -0 assignment)
            let negZero = b.loadFloat( -0.0)
            b.reassign(variable, to: negZero)
            
        case .divisionByNegativeInfinity:
            // x = 1/-Infinity (creates -0)
            let one = b.loadFloat( 1.0)
            let negInfinity = b.loadFloat( -Double.infinity)
            let result = b.binary(one, negInfinity, with: .Div)
            b.reassign(variable, to: result)
            
        case .unaryMinusZero:
            // x = -0 (via unary minus)
            let zero = b.loadFloat( 0.0)
            let negZero = b.unary(.Minus, zero)
            b.reassign(variable, to: negZero)
            
        case .mathSignZero:
            // x = Math.sign(-0) (preserves -0)
            let negZero = b.loadFloat( -0.0)
            let signResult = b.callMethod("sign", on: b.createNamedVariable(forBuiltin:"Math"), withArgs: [negZero])
            b.reassign(variable, to: signResult)
        }
    }
}

// MARK: - Supporting Types

/// Tracks how variables are used throughout the program
private class VariableUsageTracker {
    var variableUsage: [Variable: VariableUsage] = [:]
    
    func analyze(_ instr: Instruction) {
        // Track variable usage patterns
        for input in instr.inputs {
            if variableUsage[input] == nil {
                variableUsage[input] = VariableUsage()
            }
            
            let usage = variableUsage[input]!
            
            // Analyze the operation type
            switch instr.op.opcode {
            case .loadInteger:
                usage.hasLoadInteger = true
                usage.recentIntegerUsage += 1
                
            case .loadFloat:
                usage.hasLoadFloat = true
                usage.recentFloatUsage += 1
                
            case .binaryOperation(let op):
                switch op.op {
                case .Add, .Sub, .Mul, .Div, .Mod, .Exp:
                    if instr.inputs.contains(input) {
                        usage.hasFloatOperations = true
                        usage.recentFloatUsage += 1
                    }
                case .BitAnd, .BitOr, .Xor, .LShift, .RShift, .UnRShift:
                    if instr.inputs.contains(input) {
                        usage.hasIntegerOperations = true
                        usage.recentIntegerUsage += 1
                    }
                default:
                    break
                }
                
            case .unaryOperation(let op):
                switch op.op {
                case .BitwiseNot:
                    if instr.inputs.contains(input) {
                        usage.hasIntegerOperations = true
                        usage.recentIntegerUsage += 1
                    }
                default:
                    break
                }
                
            default:
                break
            }
        }
    }
}

/// Tracks usage patterns for a specific variable
private class VariableUsage {
    var hasLoadInteger = false
    var hasLoadFloat = false
    var hasIntegerOperations = false
    var hasFloatOperations = false
    var recentIntegerUsage = 0
    var recentFloatUsage = 0
}

/// Type of transition to perform
private enum TransitionType {
    case toDouble
    case toSmi
    case toFloat32
    case toBigInt
    case toNaN
    case toInfinity
    case toNegativeZero
}

/// Different ways to convert to Double representation
private enum DoubleTransitionType: CaseIterable {
    case addSmallFloat      // x += 0.1
    case mathFround         // x = Math.fround(x) + 0.5
    case divisionByZero     // x = 1/0
    case nanAssignment      // x = NaN
    case loadDouble         // x = randomDouble
}

/// Different ways to convert to Smi representation
private enum SmiTransitionType: CaseIterable {
    case bitwiseOr          // x = x | 0
    case doubleNot          // x = ~~x
    case zeroAssignment     // x = 0
    case loadInteger        // x = randomInteger
    case truncate           // x = Math.trunc(x)
}

/// Different ways to convert to Float32 representation
private enum Float32TransitionType: CaseIterable {
    case mathFround         // x = Math.fround(x)
    case float32Operation    // x = x * 1.0
    case loadFloat32        // x = randomFloat32
    case toInt32AndBack     // x = Math.fround(Math.floor(x))
}

/// Different ways to convert to BigInt representation
private enum BigIntTransitionType: CaseIterable {
    case bigIntConstructor  // x = BigInt(Math.floor(x))
    case bigIntOperation    // x = BigInt(x) + 1n
    case loadBigInt         // x = randomBigInt
    case bigIntFromString   // x = BigInt("42")
}

/// Different ways to convert to NaN
private enum NaNTransitionType: CaseIterable {
    case nanAssignment      // x = NaN
    case divisionByZero     // x = 0/0
    case mathNaN           // x = Number.NaN
    case parseIntNaN       // x = parseInt("not a number")
}

/// Different ways to convert to Infinity
private enum InfinityTransitionType: CaseIterable {
    case divisionByZero     // x = 1/0
    case infinityAssignment // x = Infinity
    case mathInfinity      // x = Number.POSITIVE_INFINITY
    case negativeInfinity  // x = -Infinity
}

/// Different ways to convert to -0
private enum NegativeZeroTransitionType: CaseIterable {
    case negativeZeroAssignment      // x = -0
    case divisionByNegativeInfinity // x = 1/-Infinity
    case unaryMinusZero             // x = -0
    case mathSignZero               // x = Math.sign(-0)
}
