function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                return a10;
            }
            function f15(a16) {
                const v19 = Array.prototype.filter;
                try { v19.apply(); } catch (e) {}
                return F0;
            }
            Object.defineProperty(this, "e", { get: f14, set: f15 });
        }
        const v21 = new F8(a5, F0, F8, a3);
        v21.e = v21;
        return a6;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
