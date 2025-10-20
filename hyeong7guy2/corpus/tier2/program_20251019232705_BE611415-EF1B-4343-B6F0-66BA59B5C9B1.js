const v1 = class {
}
function f2() {
    const v5 = { maxByteLength: 13 };
    const v7 = new ArrayBuffer(7, v5);
    const v9 = new Int8Array(v7, v5, 7);
    return v9.fill();
}
Object.defineProperty(v1, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f2 });
try { new Int32Array(v1); } catch (e) {}
