function f0() {
    class C2 {
        constructor(a4, a5) {
            for (let v6 = 0; v6 < 5; v6++) {
                v6++;
                const v8 = v6 + 1073741824;
                -v8;
                super.b >>>= v8;
            }
        }
    }
    new C2(f0, C2);
    return f0;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
