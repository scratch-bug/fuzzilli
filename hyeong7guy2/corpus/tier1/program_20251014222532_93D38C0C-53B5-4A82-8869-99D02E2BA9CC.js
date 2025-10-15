function F1() {
    if (!new.target) { throw 'must be called with new'; }
    Temporal.day = Temporal;
    const t3 = Temporal.PlainYearMonth;
    const v5 = new t3(3.0, 3.0);
    try { v5.toPlainDate(Temporal); } catch (e) {}
}
new F1();
