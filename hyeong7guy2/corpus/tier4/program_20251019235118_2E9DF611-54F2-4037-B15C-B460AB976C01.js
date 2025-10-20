function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v9 = Math.trunc();
        function F10() {
            if (!new.target) { throw 'must be called with new'; }
            for (let i12 = v9; i12 < 20000;) {
            }
        }
        const v17 = new F10();
        const t10 = v17.constructor;
        new t10();
        return v9;
    }
    f4(a3, this, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v21 = new F0();
new F0(v21, v21);
new F0();
