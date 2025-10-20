function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = class extends Date {
    }
    const v7 = new v6();
    const v8 = v7.toTemporalInstant();
    v8.fractionalSecondDigits = 6;
    new Date(v8.toString(v8));
}
new F2();
