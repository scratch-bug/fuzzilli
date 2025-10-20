function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = Temporal.Duration.from(F1);
    try { v7.subtract(v7); } catch (e) {}
}
F1.years = 8;
new F1();
