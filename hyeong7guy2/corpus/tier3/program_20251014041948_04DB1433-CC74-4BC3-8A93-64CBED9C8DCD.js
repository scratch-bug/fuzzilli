function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
function f7(a8) {
    const t4 = Temporal.PlainDateTime;
    const v11 = new t4(3, 1000);
    return v11;
}
F2.toString = f7;
try { F2.toString(); } catch (e) {}
