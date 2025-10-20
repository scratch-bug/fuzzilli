function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v9 = [];
            v9[11] = Infinity;
            Math.asinh(v9[4]);
        }
        f7(F0);
        f7.call();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
    this.toString(a4);
}
new F0();
