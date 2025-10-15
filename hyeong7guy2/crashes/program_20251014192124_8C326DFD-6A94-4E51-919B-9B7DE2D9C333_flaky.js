function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6++;
    this[Symbol.dispose] = a6;
}
const v10 = new F3("2147483647", -3612);
new F3();
let v12 = 30349n;
({"b":v12,"e":v12,...Int32Array} = v10);
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// #
// # Fatal error in ../../src/objects/js-objects.cc, line 3042
// # Debug check failed: Holder<To> v8::internal::TrustedCast(Holder<From>, SourceLocation) [To = v8::internal::String, From = v8::internal::Name, Holder = v8::internal::Tagged].
// #
// #
// #
// #FailureMessage Object: 0x7b5c33e45860
// ==== C stack trace ===============================
// 
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(___interceptor_backtrace+0x46) [0x56ebce4fdd26]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2d8bb72) [0x56ebce9e5b72]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2d8900f) [0x56ebce9e300f]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2d74efa) [0x56ebce9ceefa]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2d7420f) [0x56ebce9ce20f]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x489790d) [0x56ebd04f190d]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x48a4ee2) [0x56ebd04feee2]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x47b7855) [0x56ebd0411855]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x47b5eed) [0x56ebd040feed]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x47e166a) [0x56ebd043b66a]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x47e0a0a) [0x56ebd043aa0a]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0xa442d7d) [0x56ebd609cd7d]
// Received signal 6
// STDOUT:
// Object properties have been normalized:
// 0x7a1b00865811 <Object map = 0x7a1b008a345d>Object properties have been normalized:
// 0x7a1b00894de9 <Object map = 0x7a1b008a8de1>Object properties have been normalized:
// 0x7a1b0089c2b5 <Object map = 0x7a1b008aad61>Object properties have been normalized:
// 0x7a1b0089c731 <Object map = 0x7a1b008aad39>Object properties have been normalized:
// 0x7a1b00872ba5 <Object map = 0x7a1b008aad11>Object properties have been normalized:
// 0x7a1b00872db9 <Object map = 0x7a1b008aadfd>[generalizing]{symbol 0x7a1b00005de5}:s{Any;const}->d{Any;const} (+1 maps) [new ~F17+29 at fuzzcode.js:11]
// [migrating]
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --profile=v8 --jobs=16 --storagePath=./hyeong7guy2 --importCorpus=./out /home/hijuno/v8_release/v8/out/fuzzbuild/d8
// TARGET ARGS: /home/hijuno/v8_release/v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --harmony --experimental-fuzzing --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-rab-integration --wasm-test-streaming --trace-elements-transitions --trace-normalization --trace-gc --trace-ic --trace-opt --trace-deopt --trace-migration --trace-generalization
// CONTRIBUTORS: ClassStaticMethodEndGenerator, RegExpGenerator, ArrayGenerator, LoadNewTargetGenerator, FloatArrayGenerator, TypedArrayGenerator, SpliceMutator, InputMutator (loose), BigIntGenerator, ClassDefinitionGenerator, IntArrayGenerator, AsyncGeneratorFunctionEndGenerator, CodeGenMutator, PropertyRemovalGenerator, StringGenerator, ClassStaticMethodBeginGenerator, WellKnownPropertyStoreGenerator, AsyncGeneratorFunctionBeginGenerator, StrictModeFunctionBeginGenerator, StrictModeFunctionEndGenerator
// EXECUTION TIME: 219ms
