function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = Temporal.PlainYearMonth;
    try { new v6(8); } catch (e) {}
}
new F0(F0, F0);
