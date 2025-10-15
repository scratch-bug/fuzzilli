function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = globalThis.console;
    v5.profileEnd(a2, globalThis, v5, this, F0);
}
new F0();
