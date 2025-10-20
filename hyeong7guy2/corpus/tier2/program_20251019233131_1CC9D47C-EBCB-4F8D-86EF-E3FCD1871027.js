function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        return F0;
    }
    function f6(a7) {
        return a7;
    }
    Object.defineProperty(Object, "get", { configurable: true, enumerable: true, get: f5, set: f6 });
    const v10 = new Proxy(Object, { getOwnPropertyDescriptor: Object });
    function f11() {
        return F0;
    }
    Object.defineProperty(v10, "configurable", { enumerable: true, get: f11 });
    v10.getOwnPropertyDescriptor(v10);
}
new F0();
