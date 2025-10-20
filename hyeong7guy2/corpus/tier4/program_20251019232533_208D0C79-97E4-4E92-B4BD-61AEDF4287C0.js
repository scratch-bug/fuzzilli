function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14(a15, a16, a17) {
                for (const v18 in this) {
                }
                return F4;
            }
            f14();
        }
        new F10(F0, a7);
    }
    new F4(F0, F0, a2, F0);
}
const v22 = new F0(F0, F0);
new F0(v22, v22);
