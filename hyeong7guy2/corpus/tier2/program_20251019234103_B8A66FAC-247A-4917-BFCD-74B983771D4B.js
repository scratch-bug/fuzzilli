function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this.constructor;
    try { new v4(); } catch (e) {}
    const v6 = [-1000.0,-Infinity,1000000000.0,-1000.0];
    function f9() {
        return f9;
    }
    Object.defineProperty(Object, 0, { configurable: true, get: f9 });
    Reflect.apply(v6.includes, Object, Symbol);
}
new F0();
