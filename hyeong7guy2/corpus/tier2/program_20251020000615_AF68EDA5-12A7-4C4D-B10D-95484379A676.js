function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        function f7() {
            return Intl;
        }
        const v10 = ({ construct: f7 }).construct();
        const v11 = v10.NumberFormat;
        v11.roundingIncrement = Temporal;
        v11(v10, v11);
    } catch(e13) {
    }
}
new F0();
