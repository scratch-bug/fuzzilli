function f0(a1, a2) {
    class C4 extends Float32Array {
    }
    const v5 = new C4();
    v5[6] >>>= 10;
    arguments[0];
    return f0;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeMaglevOnNextCall(f0);
f0();
