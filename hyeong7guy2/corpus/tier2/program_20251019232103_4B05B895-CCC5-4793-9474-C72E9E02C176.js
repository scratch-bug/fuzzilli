function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v9 = [];
            v9[11] = Infinity;
            const v12 = Math.asinh(v9[4]);
            v12 >> v12;
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
            }
            function f18() {
                return F14;
            }
            return f7;
        }
        f7();
        f7.call();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
    this.toString(this, f6, f6);
}
new F0();
