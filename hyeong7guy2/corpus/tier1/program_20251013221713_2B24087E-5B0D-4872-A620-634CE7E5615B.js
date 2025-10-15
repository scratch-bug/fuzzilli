class C0 {
}
Symbol.b = C0;
Symbol[Symbol] = Symbol;
gc();
function f4() {
    return gc;
}
Object.defineProperty(Symbol, Symbol, { get: f4 });
