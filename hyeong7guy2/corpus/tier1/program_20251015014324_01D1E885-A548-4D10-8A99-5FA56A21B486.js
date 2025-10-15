function F2() {
    if (!new.target) { throw 'must be called with new'; }
    this.months = 151;
    const t3 = Temporal.PlainYearMonth;
    const v6 = new t3(3.0, 3.0);
    v6.subtract(this);
}
new F2();
