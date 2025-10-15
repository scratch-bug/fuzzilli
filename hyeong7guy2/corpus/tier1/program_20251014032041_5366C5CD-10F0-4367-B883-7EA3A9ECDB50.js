function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.PlainTime;
    const v6 = new t2(a3, a2, a2, a2, a2);
    v6.subtract(a3);
}
try { new F0(); } catch (e) {}
