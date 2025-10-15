function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = Temporal.PlainYearMonth;
    const v7 = new v6(12, 12);
    v7.since(v6);
}
try { new F1(12, 12); } catch (e) {}
