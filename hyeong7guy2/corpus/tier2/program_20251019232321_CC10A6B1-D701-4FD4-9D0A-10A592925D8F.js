for (let v1 = 0; v1 < 5; v1++) {
    function f2() {
        const v8 = {
            valueOf(a4, a5, a6, a7) {
                return this;
            },
        };
        const v10 = ("NFKD").replaceAll();
        function f11() {
            return v8;
        }
        for (let i14 = 0, i15 = 10; i15; i15--) {
        }
        const v21 = v10 + v10;
        const v25 = {
            o(a23, a24) {
                super[f11] = 4096;
                return a24;
            },
            construct: f2,
        };
        const t21 = {};
        t21.d = v21;
        const t23 = {};
        t23.b = v8;
    }
    f2();
    %OptimizeFunctionOnNextCall(f2);
}
