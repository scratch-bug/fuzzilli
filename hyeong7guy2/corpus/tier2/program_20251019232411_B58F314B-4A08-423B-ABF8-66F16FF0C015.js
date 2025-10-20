function f1() {
    return f1;
}
f1.exec = Symbol;
Object.defineProperty(Symbol, Symbol.species, { writable: true, enumerable: true, value: f1 });
const v3 = /a[bc]d/dsygm;
Object.defineProperty(v3, "constructor", { writable: true, enumerable: true, value: Symbol });
try { ("toString").split(v3); } catch (e) {}
