function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F8(a3, a5, a3, F8);
        return a5;
    }
    f4(F0, F0, f4);
    %OptimizeFunctionOnNextCall(f4);
    gc();
}
new F0();
new F0();
new F0();
