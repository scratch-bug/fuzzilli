const v2 = class {
}
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this[Symbol.toStringTag] = a5;
    function f10(a11) {
        return a11;
    }
    a6.valueOf = f10;
}
const v12 = new F3(-58450, v2);
new F3(-1666631982, v12);
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
// #FailureMessage Object: 0x7417f704a460
// ==== C stack trace ===============================
// 
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(___interceptor_backtrace+0x46) [0x570abc876d26]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2dbb272) [0x570abcd5f272]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2db86ef) [0x570abcd5c6ef]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2da45da) [0x570abcd485da]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2da38ef) [0x570abcd478ef]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x48d9f6d) [0x570abe87df6d]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x48e75b2) [0x570abe88b5b2]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x47f9c15) [0x570abe79dc15]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x4811840) [0x570abe7b5840]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x482b30a) [0x570abe7cf30a]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x482a64a) [0x570abe7ce64a]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0xa5473bd) [0x570ac44eb3bd]
// Received signal 6
// STDOUT:
// Object properties have been normalized:
// 0x7eb400958999 <Object map = 0x7eb400982c3d>Object properties have been normalized:
// 0x7eb4009351b9 <Object map = 0x7eb4009885c1>[completed compiling 0x7eb4009527dd <JSFunction isString (sfi = 0x7eb40092b399)> (target TURBOFAN_JS) - took 0.014, 12.394, 0.038 ms]
// [completed optimizing 0x7eb4009527dd <JSFunction isString (sfi = 0x7eb40092b399)> (target TURBOFAN_JS)]
// [completed compiling 0x7eb40095293d <JSFunction recordAction (sfi = 0x7eb40092b5a9)> (target MAGLEV) - took 0.000, 3.640, 0.036 ms]
// [completed compiling 0x7eb40095287d <JSFunction isSimpleString (sfi = 0x7eb40092b489)> (target MAGLEV) - took 0.001, 18.664, 0.003 ms]
// Object properties have been normalized:
// 0x7eb4009659b1 <Object map = 0x7eb40098a1c1>[generalizing]a:s{Any;const}->t{Any;const} (uninitialized field) [new ~F14+45 at fuzzcode.js:24]
// [generalizing]a:s{Any;const}->t{Any;const} (field type generalization) [new ~F14+45 at fuzzcode.js:24]
// [generalizing]{symbol 0x7eb400005e71}:s{Any;const}->d{Any;const} (+1 maps) [new ~F14+23 at fuzzcode.js:15]
// [migrating]
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --profile=v8 --jobs=16 --resume --storagePath=./hyeong7guy2 /home/hijuno/v8_release/v8/out/fuzzbuild/d8
// TARGET ARGS: /home/hijuno/v8_release/v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --harmony --experimental-fuzzing --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-rab-integration --wasm-test-streaming --trace-elements-transitions --trace-normalization --trace-gc --trace-ic --trace-opt --trace-deopt --trace-migration --trace-generalization
// CONTRIBUTORS: ProbingMutator, ClassInstanceComputedMethodBeginGenerator, TypedArrayGenerator, ClassDefinitionGenerator, ArrowFunctionBeginGenerator, ObjectConstructorGenerator, FloatGenerator, ExplorationMutator, ClassPrivateStaticMethodEndGenerator, ArrowFunctionEndGenerator, ClassInstanceComputedMethodEndGenerator, ClassPrivateStaticMethodBeginGenerator
// EXECUTION TIME: 137ms
