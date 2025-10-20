function f0() {
    let v1 = 487231775;
    v1--;
    class C3 {
        constructor(a5, a6) {
            for (let v7 = 0; v7 < 5; v7++) {
                v7++;
                let v9 = v7 + v1;
                v9++;
            }
        }
    }
    const v11 = new C3();
    return v11;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
