function f1() {
    return f1;
}
function f2() {
    const v7 = new ArrayBuffer(16, { maxByteLength: 16 });
    const v9 = new Uint8Array(v7);
    v9.slice();
}
function f11(a12) {
    return f1;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f11 });
new Uint16Array(f1);
