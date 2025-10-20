function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.PlainTime;
    const v6 = new t2();
    v6.with(v6, v6);
}
try { new F0(F0, F0); } catch (e) {}
