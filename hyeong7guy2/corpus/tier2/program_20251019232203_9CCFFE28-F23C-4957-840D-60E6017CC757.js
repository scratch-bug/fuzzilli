function f0() {
    class C1 {
        constructor(a3, a4) {
            for (let v5 = 0; v5 < 5; v5++) {
                v5++;
                super.b >>>= ~v5;
            }
        }
    }
    new C1(f0, f0);
    return C1;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
