function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = Temporal.PlainMonthDay;
    try { new v4(50774, 50774); } catch (e) {}
}
new F0();
