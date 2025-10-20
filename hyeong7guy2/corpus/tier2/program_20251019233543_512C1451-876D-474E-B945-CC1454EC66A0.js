function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            const v12 = [];
            v12[11] = Infinity;
            const v14 = v12[4] ?? 976374041;
            Math.log10(F0);
            v14 + v14;
            return f10;
        }
        f10.call();
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    f9.apply(f9);
    Object.defineProperty(this, "toString", { get: f9 });
    this.toString();
}
new F3();
