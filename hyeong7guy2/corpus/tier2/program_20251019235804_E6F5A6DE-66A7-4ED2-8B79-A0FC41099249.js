function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const t5 = Temporal.PlainTime;
    new t5(a7, a6, a6, F0);
}
try { new F4(); } catch (e) {}
