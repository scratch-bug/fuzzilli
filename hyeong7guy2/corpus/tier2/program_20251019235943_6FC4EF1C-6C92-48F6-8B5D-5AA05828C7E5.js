function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new Proxy(Object, { getOwnPropertyDescriptor: F0 });
    try { v7.keys(v7); } catch (e) {}
}
new F0();
