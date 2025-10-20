function f0() {
    class C2 {
        constructor(a4, a5) {
            for (let v6 = 0; v6 < 5; v6++) {
                super.c &= (v6 >>> v6) + -9007199254740992;
            }
        }
    }
    const v9 = new C2(f0, C2);
    return v9;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
