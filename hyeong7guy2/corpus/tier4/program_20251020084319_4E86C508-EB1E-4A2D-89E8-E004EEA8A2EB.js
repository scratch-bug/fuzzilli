function f0() {
    let v1 = -9007199254740992;
    class C2 {
        constructor(a4, a5) {
            for (let v6 = 0; v6 < 5; v6++) {
                for (let i10 = (() => {
                        new Float32Array();
                        return 0;
                    })();
                    i10 < 1;
                    (() => {
                        i10++;
                        class C15 {
                        }
                    })()) {
                    v1 %= i10;
                }
            }
        }
    }
    const v17 = new C2();
    const v18 = v17.constructor;
    new v18(v18, f0, v18, f0, f0);
    return f0;
}
const t25 = f0();
t25();
%OptimizeFunctionOnNextCall(f0);
f0();
