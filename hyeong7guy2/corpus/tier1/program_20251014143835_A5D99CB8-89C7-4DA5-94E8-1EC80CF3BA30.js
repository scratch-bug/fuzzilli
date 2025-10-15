const v2 = new Float64Array(227);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            function f18() {
                return a8;
            }
            function f19(a20) {
                v2[3943] = a5;
                return a9;
            }
            Object.defineProperty(this, "e", { get: f18, set: f19 });
            this.e = -1;
        }
        const v21 = new F12();
        return v21;
    }
    f7(F3, f7, v2);
    %OptimizeFunctionOnNextCall(f7);
}
const v23 = new F3(227, Float64Array);
new F3(Float64Array, v23);
new F3(Float64Array, F3);
