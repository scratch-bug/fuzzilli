function f0() {
    class C2 {
        constructor(a4, a5) {
            for (let v6 = 0; v6 < 5; v6++) {
                v6++;
                super.a |= v6 ** -1203242203;
            }
        }
    }
    new C2();
    return -1203242203;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
