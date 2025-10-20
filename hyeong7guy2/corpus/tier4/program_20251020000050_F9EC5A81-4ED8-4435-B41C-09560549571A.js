function f2(a3, a4, a5) {
    const t1 = Temporal.PlainYearMonth;
    return t1(a4, a5, -11, undefined);
}
try { f2(); } catch (e) {}
