function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = [-1000.0,-Infinity,1000000000.0,-1000.0];
    function f7() {
    }
    Object.defineProperty(Object, 0, { configurable: true, get: f7 });
    Reflect.apply(v4.includes, Object, Symbol);
}
new F0();
