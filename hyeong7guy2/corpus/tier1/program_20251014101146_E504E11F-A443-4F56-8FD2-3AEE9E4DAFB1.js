function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                return a7;
            }
            function f15(a16) {
                return a6;
            }
            Object.defineProperty(this, "e", { get: f14, set: f15 });
        }
        const v17 = new F8(this, F8, F0, a6);
        try { v17.e(F0, v17, F8); } catch (e) {}
        return F0;
    }
    f4(F0, F0, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v20 = new F0(F0, F0);
const v21 = new F0(v20, v20);
new F0(v21, v21);
