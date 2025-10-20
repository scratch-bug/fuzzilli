function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this[Symbol.toStringTag] = a4;
    a5.valueOf = Symbol;
}
const v8 = new F2(257, 257);
new F2(-762.7408538706644, v8);
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// #
// # Fatal error in ../../src/objects/js-objects.cc, line 3044
// # Debug check failed: Holder<To> v8::internal::TrustedCast(Holder<From>, SourceLocation) [To = v8::internal::String, From = v8::internal::Name, Holder = v8::internal::Tagged].
// #
// #
// #
// #FailureMessage Object: 0x77c1f620b860
// ==== C stack trace ===============================
// 
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(___interceptor_backtrace+0x46) [0x5cac9120ad26]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2dbb272) [0x5cac916f3272]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2db86ef) [0x5cac916f06ef]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2da45da) [0x5cac916dc5da]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2da38ef) [0x5cac916db8ef]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x48d9f6d) [0x5cac93211f6d]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x48e75b2) [0x5cac9321f5b2]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x47f9c15) [0x5cac93131c15]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x4811840) [0x5cac93149840]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x482b30a) [0x5cac9316330a]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x482a64a) [0x5cac9316264a]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0xa5473bd) [0x5cac98e7f3bd]
// Received signal 6
// STDOUT:
// Object properties have been normalized:
// 0x7eb900ec7421 <Object map = 0x7eb900f16221>Object properties have been normalized:
// 0x7eb900f07bad <Object map = 0x7eb900f1bba5>[completed compiling 0x7eb900e7c5b5 <JSFunction isSimpleString (sfi = 0x7eb900ebdb55)> (target MAGLEV) - took 0.001, 1.347, 0.011 ms]
// [completed compiling 0x7eb900e7c675 <JSFunction recordAction (sfi = 0x7eb900ebdc75)> (target MAGLEV) - took 0.000, 8.367, 0.034 ms]
// Object properties have been normalized:
// 0x7eb900ed4035 <Object map = 0x7eb900f1d97d>[generalizing]{symbol 0x7eb900005e71}:s{Any;const}->d{Any;const} (+1 maps) [new ~F48+18 at fuzzcode.js:50]
// [migrating]
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --profile=v8 --jobs=16 --resume --storagePath=./hyeong7guy2 /home/hijuno/v8_release/v8/out/fuzzbuild/d8
// TARGET ARGS: /home/hijuno/v8_release/v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --harmony --experimental-fuzzing --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-rab-integration --wasm-test-streaming --trace-elements-transitions --trace-normalization --trace-gc --trace-ic --trace-opt --trace-deopt --trace-migration --trace-generalization
// CONTRIBUTORS: ClassInstanceMethodBeginGenerator, ClassInstanceComputedMethodBeginGenerator, StringGenerator, ClassInstanceMethodEndGenerator, TypedArrayGenerator, SpliceMutator, BigIntGenerator, ClassInstanceComputedMethodEndGenerator, ClassDefinitionGenerator, ExplorationMutator, ProbingMutator
// EXECUTION TIME: 90ms
