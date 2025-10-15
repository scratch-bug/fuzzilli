function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                return a7;
            }
            function f15(a16) {
                return F8;
            }
            Object.defineProperty(this, "e", { get: f14, set: f15 });
        }
        const v17 = new F8();
        try { v17.e(F0, F0, v17, F0); } catch (e) {}
        return `object${2.2250738585072014e-308}d`;
    }
    f4(F0, F0, F0);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0(F0, F0);
new F0();
