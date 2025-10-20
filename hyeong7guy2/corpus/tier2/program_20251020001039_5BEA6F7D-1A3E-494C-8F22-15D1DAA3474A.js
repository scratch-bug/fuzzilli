const v1 = Symbol.iterator;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            function f17() {
                return v1;
            }
            function f18(a19) {
                const v20 = typeof a4;
                v20 === v20;
                return v20;
            }
            Object.defineProperty(this, "e", { get: f17, set: f18 });
            this.e = -1;
        }
        const v22 = new F11(a4, f6, this, a5);
        return v22;
    }
    f6(this, F2, a4);
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
const v25 = new F2(v1, Symbol);
const t25 = v25.constructor;
new t25(v1);
const t27 = v25.constructor;
new t27();
