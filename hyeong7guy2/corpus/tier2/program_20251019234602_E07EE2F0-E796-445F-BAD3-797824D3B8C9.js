function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v9 = [];
            v9[11] = Infinity;
            const v10 = v9[4];
            v10 ** v10;
            return F0;
        }
        f7();
        f7.call(this);
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
    this.toString();
}
new F0(F0, F0, F0);
