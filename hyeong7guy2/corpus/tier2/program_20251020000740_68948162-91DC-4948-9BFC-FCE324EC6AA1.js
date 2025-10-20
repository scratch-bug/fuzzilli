const v2 = class {
}
function f3() {
    const v8 = new ArrayBuffer(7, { maxByteLength: 13 });
    const v10 = new Int8Array(v8);
    v10.fill(13);
    return Int8Array;
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
