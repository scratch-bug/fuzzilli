function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v9 = {};
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return f4;
            }
            function f17(a18) {
                function F19(a21, a22) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                const v26 = {
                    done: F19,
                    [1]() {
                    },
                    next() {
                        return v9;
                    },
                };
                class C27 {
                    static get d() {
                    }
                }
                return v9;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
            this.e = -1;
        }
        new F10();
        return F10;
    }
    f4(f4, a2, a3);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0(F0, F0);
new F0();
