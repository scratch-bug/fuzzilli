function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = Temporal.Instant;
    try { v4.compare(); } catch (e) {}
}
new F0();
