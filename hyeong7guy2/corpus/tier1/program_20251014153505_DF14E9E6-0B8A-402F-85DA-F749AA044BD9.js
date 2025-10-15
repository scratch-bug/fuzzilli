function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = Temporal.PlainMonthDay;
    try { v4.from(50774); } catch (e) {}
}
new F0();
