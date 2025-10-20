function f1() {
    function f3() {
        return f3;
    }
    Object.defineProperty(Uint8Array, Symbol, { writable: true, configurable: true, get: f3 });
    return Symbol;
}
try { f1(); } catch (e) {}
