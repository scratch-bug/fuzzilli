function f1() {
    return f1;
}
const v2 = WebAssembly.instantiateStreaming(WebAssembly, WebAssembly, WebAssembly);
v2.catch(f1);
gc();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
}
function f10() {
    return f10;
}
function f11(a12) {
    return v2;
}
Object.defineProperty(F6, "e", { get: f10, set: f11 });
new F6();
