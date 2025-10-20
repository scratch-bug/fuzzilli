function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = Temporal.PlainTime.prototype;
    try { v8.toJSON(); } catch (e) {}
}
new F0();
