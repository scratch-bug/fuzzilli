function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9, a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        try {
            function f12() {
                return Intl;
            }
            const v15 = ({ construct: f12 }).construct();
            v15.length = 4n;
            const t10 = v15.NumberFormat;
            t10(v15);
        } catch(e18) {
        }
    }
    new F6(F6, a4, a3, F1);
}
new F1(F1, F1, F1);
