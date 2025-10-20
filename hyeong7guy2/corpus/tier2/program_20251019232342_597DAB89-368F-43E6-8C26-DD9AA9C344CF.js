function F0() {
    if (!new.target) { throw 'must be called with new'; }
    try { Temporal.ZonedDateTime(); } catch (e) {}
}
new F0();
