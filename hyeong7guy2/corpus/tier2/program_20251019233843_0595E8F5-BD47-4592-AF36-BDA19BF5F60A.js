function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.PlainYearMonth;
    const v7 = new t2(12, 12);
    try { v7.toLocaleString(); } catch (e) {}
}
new F1(12, F1);
