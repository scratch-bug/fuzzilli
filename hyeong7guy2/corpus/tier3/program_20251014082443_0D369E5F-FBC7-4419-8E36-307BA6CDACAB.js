function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Intl.RelativeTimeFormat;
    const v6 = new t2();
    try { v6.format(); } catch (e) {}
}
new F0();
