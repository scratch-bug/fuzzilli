function f1() {
    return Symbol;
}
function f2() {
    const v8 = new ArrayBuffer(16, { maxByteLength: 16 });
    const v10 = new Uint8Array(v8);
    v10.includes(7);
}
function f12(a13) {
    return Symbol;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f12 });
new Uint16Array(f1);
