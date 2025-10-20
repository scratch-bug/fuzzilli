function f0() {
    return f0;
}
Object.defineProperty(Symbol, Symbol.species, { configurable: true, enumerable: true, value: f0 });
const v3 = /a[bc]d/dsygm;
Object.defineProperty(v3, "constructor", { writable: true, enumerable: true, value: Symbol });
try { ("toString").split(v3); } catch (e) {}
