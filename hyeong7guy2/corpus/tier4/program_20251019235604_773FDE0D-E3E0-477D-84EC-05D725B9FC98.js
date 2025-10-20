function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this.constructor;
    try { new v4(a2, F0, F0); } catch (e) {}
    const v7 = globalThis.console;
    v7.error(v7);
}
new F0();
