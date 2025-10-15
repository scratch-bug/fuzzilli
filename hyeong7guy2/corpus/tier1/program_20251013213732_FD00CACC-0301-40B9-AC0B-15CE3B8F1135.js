function f1() {
    return Uint8Array;
}
function f2(a3) {
    return Uint8Array;
}
Object.defineProperty(Uint8Array, 1, { configurable: true, get: f1, set: f2 });
new Uint8Array(Uint8Array);
