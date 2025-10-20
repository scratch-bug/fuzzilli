function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.PlainTime;
    const v6 = new t2();
    Object.defineProperty(v6, "roundingMode", { writable: true, value: a2 });
    v6.toString(v6);
}
try { new F0(F0); } catch (e) {}
