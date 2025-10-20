function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = Temporal.PlainYearMonth;
    try { new v4(3.0); } catch (e) {}
}
new F1();
