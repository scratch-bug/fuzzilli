function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const v15 = -65537n / -65537n;
            v15 ** v15;
        }
        new F8(F0, a5, F0, a5);
        return a2;
    }
    f4(F0, a2, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v19 = new F0();
new F0(v19, F0);
new F0();
