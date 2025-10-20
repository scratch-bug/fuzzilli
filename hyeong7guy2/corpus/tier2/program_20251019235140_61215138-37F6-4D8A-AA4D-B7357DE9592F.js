function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f7(a8) {
            function f11(a12) {
                const v13 = [];
                v13[11] = Infinity;
                const v14 = v13[4];
                const v15 = v14 ?? 976374041;
                v15 | v15;
                Math.asinh(v14);
            }
            f11();
            f11.call();
        }
        f7();
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v23 = new F0();
v23.toString();
