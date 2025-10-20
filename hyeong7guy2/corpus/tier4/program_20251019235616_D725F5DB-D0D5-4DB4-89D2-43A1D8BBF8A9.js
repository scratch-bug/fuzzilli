function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8(a9, a10) {
            const v11 = -Infinity;
            v11 * v11;
            return F0;
        }
        new Promise(f8);
        return a7;
    }
    f4(a3, F0, f4);
    %OptimizeFunctionOnNextCall(f4);
}
const v16 = new F0();
const v17 = new F0(v16, F0);
new F0(v17, v16);
