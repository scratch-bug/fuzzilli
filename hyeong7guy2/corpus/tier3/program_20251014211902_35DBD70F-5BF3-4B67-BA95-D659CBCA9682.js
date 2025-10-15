function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { new v5(F0, v5, a2, a3); } catch (e) {}
    const v9 = new Proxy(this, {});
    v9.b = v9;
}
new F0();
