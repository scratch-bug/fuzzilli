function f0() {
    class C2 {
        constructor(a4, a5) {
            for (let v6 = 0; v6 < 5; v6++) {
                v6++;
                let v8 = v6 + -1203242203;
                v8++;
                super.b >>>= v8;
            }
        }
    }
    const v10 = new C2();
    return v10;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
