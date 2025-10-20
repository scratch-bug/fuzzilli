function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10() {
            return F0;
        }
        function f11(a12) {
            function f13() {
                let v14 = -9007199254740992;
                class C15 {
                    constructor(a17, a18) {
                        for (let v19 = 0; v19 < 5; v19++) {
                            super.b >>>= v19;
                            for (let i23 = (() => {
                                    new ArrayBuffer(C15);
                                    return 0;
                                })();
                                i23 < 1;
                                (() => {
                                    i23++;
                                    class C28 {
                                    }
                                })()) {
                                v14 %= i23;
                            }
                        }
                    }
                }
                const v30 = new C15();
                const v31 = {};
                function f32() {
                    const v38 = {
                        [v31](a34, a35, a36, a37) {
                        },
                    };
                    return v31;
                }
                const v39 = v30.constructor;
                new v39(a12, f13);
                new v39(v30, v14, a9);
                return f13;
            }
            f13();
            %PrepareFunctionForOptimization(f13);
            %OptimizeFunctionOnNextCall(f13);
            return f13();
        }
        Object.defineProperty(this, "e", { get: f10, set: f11 });
    }
    const v44 = new F4();
    v44.e = v44;
}
new F0(F0, F0);
