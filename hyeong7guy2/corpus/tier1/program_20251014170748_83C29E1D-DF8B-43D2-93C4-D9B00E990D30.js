const v0 = [-2.220446049250313e-16,0.31163673597347463,0.3498029026774545];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return a8;
            }
            function f17(a18) {
                const v19 = a18 >> a18;
                try {
                    v0.matchAll(undefined, undefined, v19);
                } catch(e22) {
                }
                return a7;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
            this.e = 2147483647;
        }
        const v23 = new F10();
        v23.e = v23;
        return a7;
    }
    f5(f5, v0, F1);
    %OptimizeFunctionOnNextCall(f5);
}
const v25 = new F1(F1, F1);
const v26 = new F1(v25, F1);
new F1(v0, v26);
