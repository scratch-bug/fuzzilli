function f0() {
    return f0;
}
Object.defineProperty(Uint8Array, "c", { get: f0, set: f0 });
function f2() {
    return f2;
}
function f3(a4) {
    return f2;
}
Object.defineProperty(Uint8Array, 1, { configurable: true, get: f2, set: f3 });
