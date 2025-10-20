const v3 = class {
}
function f4() {
    const v7 = new ArrayBuffer(1, { maxByteLength: 1000 });
    const v9 = new Int8Array(v7);
    v9.slice();
    return f4;
}
Object.defineProperty(v3, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f4 });
try { new Int32Array(v3); } catch (e) {}
