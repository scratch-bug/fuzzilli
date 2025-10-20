function f2() {
    return Symbol;
}
function f3() {
    const v8 = new ArrayBuffer(16, { maxByteLength: 16 });
    const v10 = new Uint8Array(v8);
    v10.indexOf(2147483648);
}
function f12(a13) {
    return f12;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f12 });
new Uint16Array(f2);
