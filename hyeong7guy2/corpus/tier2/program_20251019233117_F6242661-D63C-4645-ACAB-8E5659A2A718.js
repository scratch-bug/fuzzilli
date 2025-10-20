function f1() {
    class C2 {
        constructor(a4, a5) {
            for (let i7 = 0; i7 < 10000; ++i7) {
                super.b >>>= i7 / 512;
            }
        }
    }
    new C2();
    return 512;
}
f1();
%PrepareFunctionForOptimization(f1);
%OptimizeFunctionOnNextCall(f1);
f1();
