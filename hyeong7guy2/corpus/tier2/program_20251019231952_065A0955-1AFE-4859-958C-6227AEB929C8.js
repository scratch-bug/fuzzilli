function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.PlainTime;
    const v4 = new t2();
    v4.microsecond;
}
new F0();
