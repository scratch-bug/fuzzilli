function f0() {
    class C1 {
        constructor(a3, a4) {
            for (let v5 = 0; v5 < 5; v5++) {
                v5++;
                v5++;
                super.a **= v5;
            }
        }
    }
    let v8;
    try { v8 = new C1(f0, C1); } catch (e) {}
    return v8;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
