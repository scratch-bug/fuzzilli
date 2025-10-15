function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const t5 = Temporal.PlainTime;
    new t5(a9, a8, a8, a8, F0);
}
try { new F6(); } catch (e) {}
