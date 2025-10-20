function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        Reflect.construct(Temporal.PlainYearMonth, [12,12], F4);
    }
    new F4();
}
new F0();
