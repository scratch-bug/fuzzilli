function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = Temporal.PlainMonthDay;
    try { new v5(9, 50774); } catch (e) {}
}
new F1();
