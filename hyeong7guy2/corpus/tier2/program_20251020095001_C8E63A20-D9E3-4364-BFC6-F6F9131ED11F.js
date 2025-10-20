const v0 = [2147483648,194602496,-13,-65536,-14,280235539,-65537];
function f2() {
    return f2;
}
function f3() {
    const v8 = new ArrayBuffer(16, { maxByteLength: 16 });
    const v10 = new Uint8Array(v8);
    v10.set(v0);
}
function f12(a13) {
    return a13;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f12 });
new Uint16Array(f2);
