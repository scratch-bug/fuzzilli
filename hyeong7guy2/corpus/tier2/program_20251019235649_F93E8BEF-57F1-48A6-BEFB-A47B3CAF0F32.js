function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.PlainTime;
    const v6 = new t2(a3, a2);
    try { v6.add(); } catch (e) {}
}
new F0();
