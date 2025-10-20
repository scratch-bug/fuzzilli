function f0(a1) {
    class C3 {
        constructor(a5, a6) {
            for (let v7 = 0; v7 < 5; v7++) {
                super.caller **= v7 / 1;
            }
        }
    }
    const v9 = new C3();
    return v9;
}
const v10 = f0(f0);
f0(v10);
%OptimizeFunctionOnNextCall(f0);
f0(v10);
