function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    a5.weeksDisplay = F2;
    const t3 = Temporal.Duration;
    const v8 = new t3();
    v8.toLocaleString(a4, a5);
}
try { new F2(Symbol, Set); } catch (e) {}
