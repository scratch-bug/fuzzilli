function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a2(); } catch (e) {}
    function f5() {
        function f6(a7) {
            const v9 = new Uint32Array(this, a2, a2);
            const v11 = !v9.length;
            v11 || v11;
            return F0;
        }
        f6(F0);
        %OptimizeMaglevOnNextCall(f6);
        return F0;
    }
    f5();
    f5();
}
new F0(F0);
