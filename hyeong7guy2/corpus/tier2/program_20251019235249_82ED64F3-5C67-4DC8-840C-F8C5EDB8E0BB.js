function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = Temporal.PlainYearMonth;
    try {
        new v4(1, 1, "roc", F1);
    } catch(e7) {
    }
}
new F1();
