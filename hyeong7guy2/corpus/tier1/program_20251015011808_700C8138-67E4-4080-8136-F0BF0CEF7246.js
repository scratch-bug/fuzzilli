function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = globalThis.console;
    try { Temporal.from(); } catch (e) {}
    v5.profile();
}
new F0(F0, F0);
