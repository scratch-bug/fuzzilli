function f1() {
    return 1000;
}
function F4() {
    if (!new.target) { throw 'must be called with new'; }
    this[Symbol.toPrimitive] = f1;
    Temporal.day = Symbol;
    const v8 = Temporal.PlainMonthDay;
    try { new v8(this); } catch (e) {}
    const t9 = Temporal.PlainYearMonth;
    const v11 = new t9(3.0, 3.0);
    try { v11.toPlainDate(Temporal); } catch (e) {}
}
new F4();
