function f0() {
    return ("🙌🏿").charAt();
}
class C3 {
}
Object.defineProperty(C3, "toString", { configurable: true, enumerable: true, value: f0 });
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    globalThis.console.timeLog(C3);
}
new F4(F4, F4);
