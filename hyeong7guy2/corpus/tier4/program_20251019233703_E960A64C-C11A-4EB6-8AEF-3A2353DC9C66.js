function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    let v4;
    try { v4 = new a2(this, a3, F0); } catch (e) {}
    function f5() {
        function f6(a7) {
            const v9 = new Uint32Array();
            const v11 = !v9.length;
            v11 >>> v11;
            return f6;
        }
        f6(this);
        %OptimizeMaglevOnNextCall(f6);
        return v4;
    }
    f5();
    f5();
}
new F0(F0);
