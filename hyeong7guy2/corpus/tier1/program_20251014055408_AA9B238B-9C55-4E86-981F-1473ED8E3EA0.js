function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = Temporal.PlainTime;
    v5.microsecond = Temporal;
    const v6 = new v5(a3);
    v6.equals(v5);
}
try { new F0(); } catch (e) {}
