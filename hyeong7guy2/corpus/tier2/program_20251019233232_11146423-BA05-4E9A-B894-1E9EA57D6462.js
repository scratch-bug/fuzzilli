let v0 = 1;
v0 %= -1;
function f4() {
    return f4;
}
function f5() {
    const v10 = new ArrayBuffer(16, { maxByteLength: 16 });
    const v11 = new Uint8Array(v10);
    v11.indexOf(v0);
}
function f13(a14) {
    return f5;
}
Object.defineProperty(f4, Symbol.iterator, { configurable: true, enumerable: true, get: f5, set: f13 });
new Uint16Array(f4);
