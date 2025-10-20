function f0() {
    class C2 {
        constructor(a4, a5) {
            for (let v6 = 0; v6 < 5; v6++) {
                v6++;
                super.b >>>= v6 * -9223372036854775808;
            }
        }
    }
    new C2(-9223372036854775808, f0);
    return f0;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
