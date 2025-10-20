function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9(a10, a11, a12) {
        function f14(a15, a16) {
            function f17(a18, a19) {
                return a16;
            }
            return f17;
        }
        Symbol.toString = f14;
        function F21(a23, a24) {
            if (!new.target) { throw 'must be called with new'; }
            function f25() {
                function f26(a27) {
                    `string${536870912n}undefined`;
                    const v29 = Symbol.toString();
                    v29(Symbol, f25);
                    return v29;
                }
                f26(this, a8, v4);
                return f26;
            }
            Object.defineProperty(this, "toString", { get: f25 });
        }
        const v32 = new F21();
        v32.toString();
        return f14;
    }
    f9();
    %OptimizeFunctionOnNextCall(f9);
}
new F5();
new F5(v4, F5);
new F5();
