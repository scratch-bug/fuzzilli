function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this.constructor;
    try { new v4(); } catch (e) {}
    const v9 = new Proxy(Symbol, Set);
    -33724 in v9;
}
new F0();
