function f0() {
    let v1 = 1073741824;
    v1++;
    class C3 {
        constructor(a5, a6) {
            for (let v7 = 0; v7 < 5; v7++) {
                let v8 = v7 + v1;
                v8++;
                super.localeMatcher ^= v8;
            }
        }
    }
    new C3(C3, f0);
    return f0;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
