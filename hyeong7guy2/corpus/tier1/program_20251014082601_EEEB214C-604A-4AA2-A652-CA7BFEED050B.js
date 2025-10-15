function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = Temporal.PlainTime;
    v11(a9, a8, a8, a8, F0, v11);
}
try { new F6(F6, F6); } catch (e) {}
