function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = {};
    v5.ownKeys = v5;
    const v7 = new Proxy(Object, v5);
    try { v7.freeze(v7); } catch (e) {}
}
new F0(F0, F0);
