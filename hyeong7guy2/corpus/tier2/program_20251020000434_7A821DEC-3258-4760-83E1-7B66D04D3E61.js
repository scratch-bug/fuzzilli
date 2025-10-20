function f0() {
    let v1 = 7;
    class C2 {
        constructor(a4, a5) {
            for (let v6 = 0; v6 < 5; v6++) {
                v6++;
                super.c &= v6 & v1;
                for (let i10 = 0; i10 < 1; i10++) {
                    v1 %= i10;
                }
            }
        }
    }
    new C2();
    return v1;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
