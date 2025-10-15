function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.PlainMonthDay;
    new t2(("function").length, 5, "iso8601");
}
new F1();
