function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return -8n;
            }
            function f17(a18) {
                const v19 = typeof a3;
                v19 === v19;
                return v19;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
            this.e = -1;
        }
        const v21 = new F10();
        return v21;
    }
    f5(f5, -8n, F1);
    %OptimizeFunctionOnNextCall(f5);
}
const v23 = new F1(-8n, F1);
const t23 = v23.constructor;
new t23(-8n);
new F1();
