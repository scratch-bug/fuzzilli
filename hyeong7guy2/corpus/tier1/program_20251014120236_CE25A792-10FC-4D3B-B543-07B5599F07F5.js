function f0() {
    return f0;
}
function f1() {
    const v4 = { type: "function" };
    Worker("function", v4);
    return v4;
}
function f6(a7) {
    return f0;
}
Object.defineProperty(f0, Symbol.iterator, { configurable: true, enumerable: true, get: f1, set: f6 });
try { new Uint16Array(f0); } catch (e) {}
