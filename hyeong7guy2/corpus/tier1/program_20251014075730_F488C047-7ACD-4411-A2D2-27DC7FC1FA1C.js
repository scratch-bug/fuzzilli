function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                function F18() {
                    if (!new.target) { throw 'must be called with new'; }
                    try { Temporal(); } catch (e) {}
                }
                new F18();
            }
            new F14();
        }
        const v24 = new F8(a6, a7, F0, F0);
        return v24;
    }
    f4(f4, this, F0);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
