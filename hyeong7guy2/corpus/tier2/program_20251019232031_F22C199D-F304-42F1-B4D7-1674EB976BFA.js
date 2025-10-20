function F2() {
    if (!new.target) { throw 'must be called with new'; }
    this.years = -4294967295;
    const t3 = Temporal.PlainYearMonth;
    const v6 = new t3(3.0, 3.0);
    try { v6.subtract(this); } catch (e) {}
}
new F2();
