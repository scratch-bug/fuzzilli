function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new Proxy(Object, { getOwnPropertyDescriptor: Object });
    try { v7.create(v7, v7); } catch (e) {}
}
new F0(F0, F0);
