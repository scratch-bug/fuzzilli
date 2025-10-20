const v1 = class {
}
function f2() {
    const v7 = new ArrayBuffer(7, { maxByteLength: 13 });
    v7.resize();
    const v10 = new Int8Array(v7);
    const v11 = { ...v10 };
    return 7;
}
Object.defineProperty(v1, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f2 });
try { new Int32Array(v1); } catch (e) {}
