class C0 {
}
function f2() {
    return f2;
}
Object.defineProperty(f2, "lastIndex", { value: C0 });
Object.defineProperty(Symbol, Symbol.species, { configurable: true, enumerable: true, value: f2 });
const v4 = /a[bc]d/dsygm;
Object.defineProperty(v4, "constructor", { writable: true, enumerable: true, value: Symbol });
try { ("toString").split(v4); } catch (e) {}
