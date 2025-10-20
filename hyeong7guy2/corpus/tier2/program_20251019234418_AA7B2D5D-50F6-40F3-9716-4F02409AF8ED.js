const v2 = Symbol.iterator;
const v4 = class {
}
function f5() {
    const v10 = new ArrayBuffer(7, { maxByteLength: 13 });
    const v12 = new Int8Array(v10);
    v12.indexOf(2147483647);
    return Symbol;
}
Object.defineProperty(v4, v2, { writable: true, configurable: true, enumerable: true, value: f5 });
try { new Int32Array(v4); } catch (e) {}
