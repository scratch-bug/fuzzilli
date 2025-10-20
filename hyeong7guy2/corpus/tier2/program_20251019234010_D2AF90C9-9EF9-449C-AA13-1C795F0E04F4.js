function f0(a1, a2, a3) {
    return f0;
}
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
}
const v11 = F5.g;
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    function f17() {
        const t10 = Temporal.Duration;
        const v20 = new t10(v11, -65537, 8, f0);
        return v20;
    }
    try { f17(); } catch (e) {}
}
new F13(v11, f0);
