function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = Temporal.PlainMonthDay;
    try {
        new v5(-1, -1, "islamic-civil", 50774);
    } catch(e8) {
    }
}
new F1();
