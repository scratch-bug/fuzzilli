class C1 {
}
function f2() {
    return Symbol;
}
Object.defineProperty(C1, "toString", { configurable: true, enumerable: true, value: f2 });
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    globalThis.console.timeLog(C1);
}
new F3();
