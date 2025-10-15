class C0 {
}
const v1 = new C0();
function f2() {
    return v1;
}
Object.defineProperty(v1, "constructor", { configurable: true, enumerable: true, get: f2 });
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(a6, "constructor", { value: f2 });
}
new F3(v1, v1);
