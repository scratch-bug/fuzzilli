function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.Duration;
    const v6 = new t2();
    try { v6.total(a2); } catch (e) {}
}
new F0();
