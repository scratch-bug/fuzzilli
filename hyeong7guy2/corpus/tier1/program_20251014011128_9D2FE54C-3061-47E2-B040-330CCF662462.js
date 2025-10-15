const v1 = new Map();
const v3 = {};
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    Symbol.for(a7.description);
    const v10 = this.constructor;
    try { new v10(Symbol, F4); } catch (e) {}
}
function f12() {
    return v1;
}
Object.defineProperty(F4, "description", { configurable: true, get: f12 });
new F4(v3, Symbol);
