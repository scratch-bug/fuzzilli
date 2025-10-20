function f0() {
    class C1 {
        constructor(a3, a4) {
            for (let v5 = 0; v5 < 5; v5++) {
                super.toDateString /= v5++;
            }
        }
    }
    new C1(C1, C1);
    return f0;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
