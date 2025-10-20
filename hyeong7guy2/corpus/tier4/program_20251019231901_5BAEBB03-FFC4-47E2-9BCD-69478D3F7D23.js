function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = {};
    v6.preventExtensions = gc;
    const v8 = new Proxy(Object, v6);
    try { v8.freeze(v8); } catch (e) {}
}
new F1();
