function f0() {
    class C2 {
        constructor(a4, a5) {
            for (let v6 = 0; v6 < 5; v6++) {
                super.c &= v6 & 7;
            }
        }
    }
    const v8 = new C2(C2, 7);
    return v8;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
