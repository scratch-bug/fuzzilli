const v0 = [0.0,-2.2250738585072014e-308];
const v1 = delete v0[65535];
function f3() {
    return v1;
}
function f4() {
    const v7 = { maxByteLength: 16 };
    const v9 = new ArrayBuffer(16, v7);
    const v11 = new Uint8Array(v9);
    v11.slice(v7, v1);
}
function f13(a14) {
    return v0;
}
Object.defineProperty(f3, Symbol.iterator, { configurable: true, enumerable: true, get: f4, set: f13 });
new Uint16Array(f3);
