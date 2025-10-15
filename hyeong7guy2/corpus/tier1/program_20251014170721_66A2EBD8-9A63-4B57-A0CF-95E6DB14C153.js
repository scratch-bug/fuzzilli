function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = Temporal.PlainMonthDay;
    try { v3.from(); } catch (e) {}
}
new F0();
