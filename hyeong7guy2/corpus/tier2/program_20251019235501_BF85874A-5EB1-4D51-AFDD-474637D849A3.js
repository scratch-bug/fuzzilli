function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.PlainMonthDay;
    new t2(12, 12);
}
new F1();
