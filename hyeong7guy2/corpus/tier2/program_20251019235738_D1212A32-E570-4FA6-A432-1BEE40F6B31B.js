const v1 = class {
}
const v2 = v1.length;
function f3() {
    const v8 = new ArrayBuffer(7, { maxByteLength: 13 });
    const v10 = new Int8Array(v8);
    v10.indexOf(v2);
    return v10;
}
Object.defineProperty(v1, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v1); } catch (e) {}
