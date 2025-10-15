function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        const t3 = Temporal.PlainYearMonth;
        t3(a2, 20000, 5, Reflect);
    } catch(e9) {
    }
}
new F0(F0);
