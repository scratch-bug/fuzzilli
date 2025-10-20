function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            Temporal.day = 3.0;
            function f17() {
                return F0;
            }
            function f18(a19) {
                const v21 = { __proto__: null };
                for (let v22 = 0; v22 < 5; v22++) {
                }
                return null;
            }
            Object.defineProperty(this, "e", { get: f17, set: f18 });
            this.e = -1;
        }
        const v23 = new F9();
        return v23;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v25 = new F0();
new F0(v25, F0);
new F0();
