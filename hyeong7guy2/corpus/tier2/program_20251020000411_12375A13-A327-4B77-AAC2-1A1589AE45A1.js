function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.PlainMonthDay;
    new t2(5, 5);
}
new F1();
