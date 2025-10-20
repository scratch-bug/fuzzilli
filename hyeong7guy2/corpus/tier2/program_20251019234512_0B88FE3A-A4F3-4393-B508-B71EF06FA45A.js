function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = {};
    Object.defineProperty(v5, "ownKeys", { configurable: true, enumerable: true, value: a2 });
    const v7 = new Proxy(Object, v5);
    try { v7.create(v7, v7); } catch (e) {}
}
new F0(F0);
