function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = Temporal.Duration;
    const v8 = v7.prototype;
    try { v8.add(a4, F0, v7, F0); } catch (e) {}
}
new F0();
