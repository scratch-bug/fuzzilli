function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a3(); } catch (e) {}
    function f5() {
        function f6(a7) {
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v14 = new F8(F0, a7, F0, a7);
            v14.constructor;
            for (let i17 = 0; i17 < 20000; i17++) {
            }
        }
        f6(f5);
        %OptimizeMaglevOnNextCall(f6);
        return a3;
    }
    f5();
    f5();
}
new F0(F0, F0);
