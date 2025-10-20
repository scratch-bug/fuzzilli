function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.PlainTime;
    const v7 = new t2();
    v7.fractionalSecondDigits = a4;
    v7.toString(v7);
}
new F1(9, 9);
