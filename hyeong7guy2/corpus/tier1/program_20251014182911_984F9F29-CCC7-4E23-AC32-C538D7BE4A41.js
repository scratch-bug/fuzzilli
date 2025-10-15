function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = Temporal.PlainYearMonth;
    const v7 = new v6(12, 12);
    try { v7.until(v6); } catch (e) {}
}
new F1();
