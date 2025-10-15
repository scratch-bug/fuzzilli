function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.PlainYearMonth;
    new t2(3.0, 3.0);
}
new F1();
