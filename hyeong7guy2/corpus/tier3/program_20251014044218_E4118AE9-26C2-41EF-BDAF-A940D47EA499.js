function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            a11 ** a2;
        }
        const v15 = new F8(F0, a7, a2, f4);
        return v15;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0(F0);
new F0();
