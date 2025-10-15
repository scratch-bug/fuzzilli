for (let v1 = 0; v1 < 500; v1++) {
    v1 / v1;
}
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// [COV] edge counters initialized. Shared memory: shm_id_3804853_8 with 1569395 edges
// V8 is running with experimental features enabled. Stability and security will suffer.
// 
// 
// #
// # Fatal error in ../../src/maglev/maglev-interpreter-frame-state.h, line 66
// # Debug check failed: !value->properties().is_conversion().
// #
// #
// #
// #FailureMessage Object: 0x78de4b1e2060
// ==== C stack trace ===============================
// 
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(___interceptor_backtrace+0x46) [0x60edc95bdd26]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2d8bb72) [0x60edc9aa5b72]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2d8900f) [0x60edc9aa300f]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2d74efa) [0x60edc9a8eefa]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2d7420f) [0x60edc9a8e20f]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x5a8fbad) [0x60edcc7a9bad]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x5ca39d7) [0x60edcc9bd9d7]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x5a88086) [0x60edcc7a2086]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x5a67427) [0x60edcc781427]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x5b0a8ee) [0x60edcc8248ee]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x5b0a048) [0x60edcc824048]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x5a94f56) [0x60edcc7aef56]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x5b2d657) [0x60edcc847657]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x554f90d) [0x60edcc26990d]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x5541b98) [0x60edcc25bb98]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x30b76a3) [0x60edc9dd16a3]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x554752b) [0x60edcc26152b]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2d92b49) [0x60edc9aacb49]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2daa1e5) [0x60edc9ac41e5]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x2d8334a) [0x60edc9a9d34a]
//     /home/hijuno/v8_release/v8/out/fuzzbuild/d8(+0x28fb627) [0x60edc9615627]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7cde96894ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x1268c0) [0x7cde969268c0]
// Received signal 6
// STDOUT:
// Warning: unknown flag --trace-ic.
// Try --help for options
// Object properties have been normalized:
// 0x779d008423c5 <Object map = 0x779d008259fd>Object properties have been normalized:
// 0x779d00817389 <Object map = 0x779d0082b5c5>[marking 0x779d0082d541 <JSFunction (sfi = 0x779d0082cca1)> for optimization to MAGLEV, ConcurrencyMode::kConcurrent, reason: hot and stable]
// [compiling method 0x779d0082d541 <JSFunction (sfi = 0x779d0082cca1)> (target MAGLEV) OSR, mode: ConcurrencyMode::kConcurrent]
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --profile=v8 --jobs=16 --storagePath=./hyeong7guy2 --importCorpus=./out /home/hijuno/v8_release/v8/out/fuzzbuild/d8
// TARGET ARGS: /home/hijuno/v8_release/v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --harmony --experimental-fuzzing --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-rab-integration --wasm-test-streaming --trace-elements-transitions --trace-normalization --trace-gc --trace-ic --trace-opt --trace-deopt --trace-migration --trace-generalization
// CONTRIBUTORS: FloatArrayGenerator, BigIntGenerator, ClassDefinitionGenerator, ClassPrivateStaticMethodBeginGenerator, IntArrayGenerator, ClassStaticSetterBeginGenerator, TypedArrayGenerator, TrivialFunctionGenerator, IntegerGenerator, ClassPrivateStaticMethodEndGenerator, ClassStaticSetterEndGenerator, InputMutator (loose), ElementAssignmentGenerator, FloatGenerator
// EXECUTION TIME: 147ms
