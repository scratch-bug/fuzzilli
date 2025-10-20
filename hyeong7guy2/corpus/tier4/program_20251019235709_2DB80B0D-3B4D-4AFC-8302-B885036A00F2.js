function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
F1.smallestUnit = WeakSet;
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const t6 = Temporal.Duration;
    const v10 = new t6();
    v10.toString(F1);
}
try { new F4(); } catch (e) {}
