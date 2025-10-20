function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.PlainDate;
    const v6 = new t2(6, 6, 6);
    try { v6.toString(null); } catch (e) {}
}
new F0();
