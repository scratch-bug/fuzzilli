let v0 = 1;
let v2 = -1;
v2++;
v0 %= v2;
function f5() {
    return f5;
}
function f6() {
    const v11 = new ArrayBuffer(16, { maxByteLength: 16 });
    const v12 = new Uint8Array(v11);
    v12.indexOf(v0);
}
function f14(a15) {
    return a15;
}
Object.defineProperty(f5, Symbol.iterator, { configurable: true, enumerable: true, get: f6, set: f14 });
new Uint16Array(f5);
