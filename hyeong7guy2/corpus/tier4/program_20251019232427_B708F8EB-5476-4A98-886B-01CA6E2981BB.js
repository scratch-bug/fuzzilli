function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F11(a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            a15 ^ a15;
        }
        const v17 = new F11(WeakSet, Date, -26369n);
        new F11(v17, F0, a2);
        return F0;
    }
    f4(a3, F0, a2);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
