function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    Symbol.g = Symbol;
    Symbol[Symbol.toPrimitive] = Symbol;
    function f7() {
        return F0;
    }
    Object.defineProperty(Symbol, Symbol, { get: f7 });
}
new F0(F0, F0, F0);
