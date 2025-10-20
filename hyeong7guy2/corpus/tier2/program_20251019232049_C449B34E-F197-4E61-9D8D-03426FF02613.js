const v1 = class {
}
function f2() {
    const v7 = new ArrayBuffer(7, { maxByteLength: 13 });
    const v8 = v7.transferToFixedLength();
    v7.resize(7);
    return v8;
}
Object.defineProperty(v1, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f2 });
try { new Int32Array(v1); } catch (e) {}
