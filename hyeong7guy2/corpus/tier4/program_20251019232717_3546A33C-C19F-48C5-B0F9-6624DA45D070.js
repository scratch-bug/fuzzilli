function f2(a3, a4) {
    const v5 = {};
    v5.defineProperty = -65536;
    const v7 = new Proxy(Object, v5);
    return v7.freeze(v7);
}
try { f2(f2, -65536); } catch (e) {}
