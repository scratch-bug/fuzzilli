function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = Temporal.Instant;
    try { v4.fromEpochMilliseconds(); } catch (e) {}
}
new F0(F0);
