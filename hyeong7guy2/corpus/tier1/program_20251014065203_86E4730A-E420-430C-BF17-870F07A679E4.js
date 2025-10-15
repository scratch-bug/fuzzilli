function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        class C8 {
        }
        new C8();
        new C8();
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            function f18() {
                return this;
            }
            function f19(a20) {
                const v22 = new Map();
                with (v22) {
                }
                const v25 = {
                    next() {
                        for (let [,v24] of v22) {
                        }
                        return a6;
                    },
                };
            }
            Object.defineProperty(this, "e", { get: f18, set: f19 });
            this.e = -1;
        }
        new F12(a3, f4, a7, a6);
        return a5;
    }
    f4(F0, F0, a2);
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0(F0, F0);
new F0();
