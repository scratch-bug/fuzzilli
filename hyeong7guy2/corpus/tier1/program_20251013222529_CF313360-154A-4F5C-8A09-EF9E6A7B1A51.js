Symbol[Symbol.toPrimitive] = Symbol;
function f2() {
    return f2;
}
Object.defineProperty(Symbol, Symbol, { get: f2 });
