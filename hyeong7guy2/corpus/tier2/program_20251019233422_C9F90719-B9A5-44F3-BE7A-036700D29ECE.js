Set.milliseconds = BigUint64Array;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const t3 = Temporal.Duration;
    const v9 = new t3();
    v9.toLocaleString(a5, a6);
}
try { new F3(Symbol, Set); } catch (e) {}
