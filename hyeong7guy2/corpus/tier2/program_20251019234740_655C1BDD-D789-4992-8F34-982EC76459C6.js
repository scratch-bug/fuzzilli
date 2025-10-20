function f0() {
    class C1 {
        constructor(a3, a4) {
            for (let v5 = 0; v5 < 5; v5++) {
                v5--;
                const v7 = v5++;
                v5++;
                super.getDate *= v7;
            }
        }
    }
    try { new C1(); } catch (e) {}
    return f0;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
