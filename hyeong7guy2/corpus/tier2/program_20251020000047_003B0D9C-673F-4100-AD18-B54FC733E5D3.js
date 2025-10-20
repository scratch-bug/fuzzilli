function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = Temporal.PlainYearMonth;
    const v5 = new v4(3.0, 3.0);
    try { v5.add(Temporal, v4); } catch (e) {}
}
new F1();
