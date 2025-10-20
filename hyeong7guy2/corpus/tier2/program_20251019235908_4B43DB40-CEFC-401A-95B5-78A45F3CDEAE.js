function f0() {
}
class C1 {
}
Object.defineProperty(C1, "toString", { configurable: true, enumerable: true, value: f0 });
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = globalThis.console;
    v7.time();
    v7.timeLog(C1);
}
new F2();
