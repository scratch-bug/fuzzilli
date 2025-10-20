function f0() {
    class C1 {
        constructor(a3, a4) {
            for (let v5 = 0; v5 < 5; v5++) {
                v5++;
                v5++;
                super.getDate *= v5;
            }
        }
    }
    try { new C1(C1, C1); } catch (e) {}
    return C1;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
