function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(this, Symbol.toStringTag, { writable: true, enumerable: true, value: a4 });
}
const v9 = new F2(5.0);
const v10 = new F2(1e-15);
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    v9[0] = 97;
}
new F11(5.0, v10);
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
// #FailureMessage Object: 0x71c121419060
// ==== C stack trace ===============================
// 
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(___interceptor_backtrace+0x46) [0x56c6ee714d26]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2dbb272) [0x56c6eebfd272]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2db86ef) [0x56c6eebfa6ef]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2da45da) [0x56c6eebe65da]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2da38ef) [0x56c6eebe58ef]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x48d9f6d) [0x56c6f071bf6d]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x48e75b2) [0x56c6f07295b2]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x47f9c15) [0x56c6f063bc15]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x481f46d) [0x56c6f066146d]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x4831f77) [0x56c6f0673f77]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x483126a) [0x56c6f067326a]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0xa5473bd) [0x56c6f63893bd]
// Received signal 6
// STDOUT:
// Object properties have been normalized:
// 0x7eab0096a9f9 <Object map = 0x7eab015b2889>Object properties have been normalized:
// 0x7eab015a4215 <Object map = 0x7eab015b820d>[completed compiling 0x7eab00840041 <JSFunction C218 (sfi = 0x7eab01005091)> (target TURBOFAN_JS) - took 0.008, 212.072, 0.067 ms]
// [completed optimizing 0x7eab00840041 <JSFunction C218 (sfi = 0x7eab01005091)> (target TURBOFAN_JS)]
// [aborted compiling 0x7eab010062e9 <JSFunction F82 (sfi = 0x7eab0100407d)> (target MAGLEV) because: Bailed out due to dependency change]
// Object properties have been normalized:
// 0x7eab00979211 <Object map = 0x7eab015bc479>[generalizing]d:h{Class(0x7eab015bc309);const}->t{Any;mutable} (uninitialized field) [new ~F21+152 at fuzzcode.js:38]
// [generalizing]d:h{Class(0x7eab015bc309);const}->t{Any;mutable} (field type generalization) [new ~F21+152 at fuzzcode.js:38]
// [generalizing]e:h{Class(0x7eab015bc309);const}->h{Any;mutable} (uninitialized field) [~+290 at fuzzcode.js:45]
// [generalizing]e:h{Class(0x7eab015bc309);const}->h{Any;mutable} (field type generalization) [~+290 at fuzzcode.js:45]
// Object properties have been normalized:
// 0x7eab00979719 <Object map = 0x7eab015bc649>[generalizing]value:v{None;const}->s{Any;const} (uninitialized field) [new ~F49+32 at fuzzcode.js:59]
// [generalizing]value:v{None;const}->s{Any;const} (field type generalization) [new ~F49+32 at fuzzcode.js:59]
// [generalizing]c:s{Any;const}->t{Any;mutable} (uninitialized field) [~+408 at fuzzcode.js:75]
// [generalizing]c:s{Any;const}->t{Any;mutable} (field type generalization) [~+408 at fuzzcode.js:75]
// [generalizing]value:s{Any;const}->d{Any;const} (+1 maps) [new ~F49+32 at fuzzcode.js:59]
// [generalizing]{symbol 0x7eab00005e71}:s{Any;const}->d{Any;const} (+1 maps) [new ~F49+39 at fuzzcode.js:59]
// [generalizing]e:h{Class(0x7eab015a9465);const}->h{Any;mutable} (uninitialized field) [new ~F49+128 at fuzzcode.js:66]
// [generalizing]e:h{Class(0x7eab015a9465);const}->h{Any;mutable} (field type generalization) [new ~F49+128 at fuzzcode.js:66]
// [generalizing]value:d{Any;const}->t{Any;mutable} (uninitialized field) [~+462 at fuzzcode.js:87]
// [generalizing]value:d{Any;const}->t{Any;mutable} (field type generalization) [~+462 at fuzzcode.js:87]
// [generalizing]constructor:h{Class(0x7eab0159f2b1);const}->h{Any;const} (uninitialized field) [~+484 at fuzzcode.js:88]
// [generalizing]constructor:h{Class(0x7eab0159f2b1);const}->h{Any;const} (field type generalization) [~+484 at fuzzcode.js:88]
// Object properties have been normalized:
// 0x7eab00979c1d <Object map = 0x7eab015bc96d>[generalizing]c:d{Any;const}->t{Any;mutable} (field type generalization) [new ~F76+108 at fuzzcode.js:85]
// [migrating]
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --profile=v8 --jobs=16 --resume --storagePath=./hyeong7guy2 /home/hijuno/v8_release/v8/out/fuzzbuild/d8
// TARGET ARGS: /home/hijuno/v8_release/v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --harmony --experimental-fuzzing --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-rab-integration --wasm-test-streaming --trace-elements-transitions --trace-normalization --trace-gc --trace-ic --trace-opt --trace-deopt --trace-migration --trace-generalization
// CONTRIBUTORS: BeginTryGenerator, BuiltinObjectInstanceGenerator, ObjectConstructorGenerator, ClassInstanceElementGenerator, FloatGenerator, ClassPrivateStaticPropertyGenerator, ProbingMutator, ClassDefinitionGenerator, ClassStaticInitializerEndGenerator, ClassInstanceMethodBeginGenerator, ExplorationMutator, BeginCatchGenerator, ClassStaticInitializerBeginGenerator, EndTryCatchFinallyGenerator, ClassInstanceMethodEndGenerator
// EXECUTION TIME: 200ms
