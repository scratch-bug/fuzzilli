function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f8(a9) {
                const v10 = [];
                v10[11] = Infinity;
                const v11 = v10[4];
                v11 | v11;
                Math.asinh(v11);
                return a6;
            }
            return f8(f8, f5);
        }
        f5(f5);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v18 = new F0(F0, F0);
v18.toString();
