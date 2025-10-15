function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.PlainTime;
    const v7 = new t2();
    try { v7.subtract(88); } catch (e) {}
}
new F1(F1, F1);
