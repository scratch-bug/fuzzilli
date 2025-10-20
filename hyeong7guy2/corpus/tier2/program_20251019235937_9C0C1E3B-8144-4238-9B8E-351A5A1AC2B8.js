function F3() {
    if (!new.target) { throw 'must be called with new'; }
    this.years = -4294967295;
    const t3 = Temporal.PlainYearMonth;
    const v7 = new t3(3.0, 3.0);
    try { v7.subtract(this, 1000000000000.0); } catch (e) {}
}
new F3();
