function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10, a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
            }
            function f13(a14) {
                Error.prepareStackTrace = a14;
                return Error().stack;
            }
            try { f13(F7); } catch (e) {}
            `string${a6}undefined`;
            return F7;
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v22 = new F0();
v22.toString();
