function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Intl.DateTimeFormat;
    t2(a4, this).formatRangeToParts(0, 4294967297);
}
new F1(F1, 4294967297);
