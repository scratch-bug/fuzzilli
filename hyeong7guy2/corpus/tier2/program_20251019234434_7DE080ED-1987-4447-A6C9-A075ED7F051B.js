function f0() {
    class C1 {
        constructor(a3, a4) {
            for (let i6 = 0; i6 < 10000; ++i6) {
                super.b >>>= i6 / i6;
            }
        }
    }
    new C1();
    return f0;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
