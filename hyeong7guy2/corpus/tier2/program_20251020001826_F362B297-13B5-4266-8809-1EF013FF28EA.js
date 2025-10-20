function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10() {
            return a8;
        }
        function f11(a12) {
            function f13() {
                let v14 = -9007199254740992;
                class C15 {
                    constructor(a17, a18) {
                        for (let v19 = 0; v19 < 5; v19++) {
                            super.b >>>= v19;
                            for (let i21 = 0;
                                i21 < 1;
                                (() => {
                                    i21++;
                                    class C26 {
                                    }
                                    C26.b = C26;
                                    function F27() {
                                        if (!new.target) { throw 'must be called with new'; }
                                        return F27;
                                    }
                                })()) {
                                v14 %= i21;
                            }
                        }
                    }
                }
                const v30 = new C15(F0, v14);
                const v31 = v30.constructor;
                new v31();
                new v31();
                return F4;
            }
            f13();
            %PrepareFunctionForOptimization(f13);
            %OptimizeFunctionOnNextCall(f13);
            f13();
            return f13;
        }
        Object.defineProperty(this, "e", { get: f10, set: f11 });
    }
    const v36 = new F4(F4, F4, a3, F0);
    v36.e = v36;
}
new F0(F0, F0);
