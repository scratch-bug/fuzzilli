function f1(a2) {
    return "10";
}
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        Temporal.toString = f1;
        function f10() {
            return Intl;
        }
        const v13 = ({ construct: f10 }).construct();
        const v14 = v13.NumberFormat;
        v14.roundingIncrement = Temporal;
        v14(v13, v14);
    } catch(e16) {
    }
}
new F3("10", f1, f1, "10");
