function f1() {
    return 1391;
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
F2.valueOf = f1;
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const t9 = Temporal.PlainTime;
    new t9(a9, a8, a8, F2);
}
try { new F6(); } catch (e) {}
