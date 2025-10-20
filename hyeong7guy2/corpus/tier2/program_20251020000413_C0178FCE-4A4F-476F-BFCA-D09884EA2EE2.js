function f0() {
    class C2 {
        constructor(a4, a5) {
            for (let i7 = 8; i7 < 10000; ++i7) {
                super.b >>>= i7 / 3;
            }
        }
    }
    new C2();
    return 3;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
