class C1 extends WeakSet {
}
function f2() {
    return ("🙌🏿").charAt();
}
function f5(a6) {
    return WeakSet;
}
Object.defineProperty(C1, Symbol.toPrimitive, { configurable: true, get: f2, set: f5 });
try { JSON.rawJSON(C1); } catch (e) {}
