function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10() {
            function f11(a12) {
                e = f11;
                return a3;
            }
            f11(F0);
            %OptimizeMaglevOnNextCall(f11);
            return f11;
        }
        f10();
        Object.defineProperty(this, "toString", { get: f10 });
    }
    const v16 = new F6(F0, F0);
    const v17 = v16.toString;
    v17.prototype = v17;
    v17();
}
new F0(F0, F0, F0, F0);
