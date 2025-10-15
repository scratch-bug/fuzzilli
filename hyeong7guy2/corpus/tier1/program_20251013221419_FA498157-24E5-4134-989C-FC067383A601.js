class C3 {
}
Symbol.b = C3;
const v15 = Symbol.iterator;
Symbol[Symbol.toPrimitive] = Symbol;
function f20() {
    return f20;
}
Object.defineProperty(Symbol, Symbol.toPrimitive, { get: f20 });
const v25 = class {
}
function f26(a27, a28) {
    a28 |= v15;
    return v15;
}
v25.constructor = f26;
try { v25.constructor(); } catch (e) {}
