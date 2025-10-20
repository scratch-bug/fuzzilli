function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.PlainTime;
    const v7 = new t2();
    v7.largestUnit = Symbol;
    v7.since(v7, v7);
}
try { new F0(F0, F0); } catch (e) {}
