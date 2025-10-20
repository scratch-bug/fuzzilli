function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.PlainYearMonth;
    const v8 = new t2(12, 12);
    v8.era %= -784902.7953136003;
}
new F2(F2, 12);
