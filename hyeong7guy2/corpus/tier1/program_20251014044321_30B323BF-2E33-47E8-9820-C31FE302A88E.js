function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = Temporal.PlainTime;
    v5.hour = v5;
    const v6 = new v5();
    v6.equals(v5);
}
try { new F0(F0, F0); } catch (e) {}
