function F1() {
    if (!new.target) { throw 'must be called with new'; }
    Temporal.day = 3.0;
    const t3 = Temporal.PlainYearMonth;
    const v5 = new t3(3.0, 3.0);
    v5.toPlainDate(Temporal);
}
new F1();
