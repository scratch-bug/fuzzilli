function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = F1.g;
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    function f13() {
        const t7 = Temporal.Duration;
        new t7(v7, -65537, 8);
        return Temporal;
    }
    try { f13(); } catch (e) {}
}
new F9(-65537, F9);
