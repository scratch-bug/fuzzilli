function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    class C3 {
    }
    const v4 = {};
    v4.has = v4;
    function f6() {
        return f6;
    }
    const v7 = new Proxy(f6, v4);
    try { Reflect.defineProperty(f6, C3, v7); } catch (e) {}
}
new F0(F0);
