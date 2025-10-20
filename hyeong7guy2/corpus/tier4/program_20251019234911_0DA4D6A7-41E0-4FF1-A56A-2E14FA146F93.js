function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v9 = Math.asinh();
        function F10() {
            if (!new.target) { throw 'must be called with new'; }
            for (let i12 = v9; i12 >= 20000;) {
            }
        }
        new F10();
        return v9;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
