function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                return f14;
            }
            function f15(a16) {
                return F8;
            }
            Object.defineProperty(this, "e", { get: f14, set: f15 });
        }
        const v17 = new F8(a5, F8, a7, a6);
        let v18;
        try { v18 = v17.e(a2, a7, a7, F8, this); } catch (e) {}
        v18();
        return v18;
    }
    f4(a3, F0, this);
    %OptimizeFunctionOnNextCall(f4);
}
const v21 = new F0(F0, F0);
const v22 = new F0();
new F0(v21, v22);
