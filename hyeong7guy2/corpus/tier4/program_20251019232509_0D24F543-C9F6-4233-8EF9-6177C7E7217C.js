function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                for (let i19 = 0; i19 < 25000; ++i19) {
                    i19 + 1497827324;
                }
            }
            new F14();
        }
        const v28 = new F8(a6, a2, a5, F0);
        return v28;
    }
    f4(F0, a2, a2);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0(F0, F0);
new F0();
