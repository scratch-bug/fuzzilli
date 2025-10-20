function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const v16 = Date.prototype.getDay;
            const v17 = [];
            try { v16.apply(a5, v17); } catch (e) {}
        }
        new F8(this, a7, f4, f4);
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v21 = new F0(F0, F0);
new F0(F0, v21);
new F0(v21, F0);
