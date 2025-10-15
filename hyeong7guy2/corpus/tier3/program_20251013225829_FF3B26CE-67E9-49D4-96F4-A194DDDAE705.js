function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Intl.DateTimeFormat;
    const v5 = t2();
    try { v5.formatRangeToParts("cv", "cv"); } catch (e) {}
}
new F0();
