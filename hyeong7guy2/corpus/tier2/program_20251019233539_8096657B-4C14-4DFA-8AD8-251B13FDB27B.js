function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.PlainYearMonth;
    const v5 = new t2(3.0, 3.0);
    try { v5.toPlainDate(3.0); } catch (e) {}
}
new F1();
