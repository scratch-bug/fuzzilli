const v1 = Symbol.iterator;
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F2(v1, Symbol, F2);
v7.length = v1;
function F8() {
    if (!new.target) { throw 'must be called with new'; }
}
Object.defineProperty(F8, "builtins", { configurable: true, value: v7 });
const v10 = class extends F8 {
}
function f12() {
    return f12;
}
WebAssembly.instantiateStreaming(54060, WebAssembly, v10).catch(f12);
