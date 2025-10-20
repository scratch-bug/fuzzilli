const v1 = Symbol.iterator;
const v2 = v1.description;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            function f18() {
                return f18;
            }
            function f19(a20) {
                `h${Symbol}string${v2}object`;
                return a8;
            }
            Object.defineProperty(this, "e", { get: f18, set: f19 });
            this.e = -1;
        }
        new F12();
        return f7;
    }
    f7(a5, v2, v1);
    %OptimizeFunctionOnNextCall(f7);
}
const v24 = new F3(v1, v1);
const v25 = v24.constructor;
new v25();
new F3(v25, F3);
