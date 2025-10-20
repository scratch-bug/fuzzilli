function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = Symbol.toPrimitive;
    const t2 = Temporal.Duration;
    const v8 = new t2(a2, a3, a3, a2);
    try { v8.total(v5); } catch (e) {}
}
new F0();
