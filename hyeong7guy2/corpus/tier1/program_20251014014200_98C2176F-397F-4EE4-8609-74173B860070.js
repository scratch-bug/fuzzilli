function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        function f5() {
            return Symbol;
        }
        Object.defineProperty(Symbol, Symbol, { get: f5 });
        new F1(this, a3);
    } catch(e7) {
    }
}
new F1(Symbol, Symbol);
