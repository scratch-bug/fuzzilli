function f2() {
    return f2;
}
function f3() {
    const v7 = new ArrayBuffer(16, { maxByteLength: 16 });
    const v9 = new Uint8Array(v7);
    v9[8] = v9;
}
function f10(a11) {
    return 16;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f10 });
new Uint16Array(f2);
