function f0() {
    class C2 {
        constructor(a4, a5) {
            for (let v6 = 0; v6 < 5; v6++) {
                v6++;
                super.constructor += v6 ** -1203242203;
            }
        }
    }
    new C2(C2, f0);
    return f0;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
