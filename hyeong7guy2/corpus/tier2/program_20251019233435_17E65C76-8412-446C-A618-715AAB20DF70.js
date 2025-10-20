function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.Duration;
    const v8 = new t2();
    try { v8.subtract(); } catch (e) {}
}
new F0(F0, F0, F0, F0);
