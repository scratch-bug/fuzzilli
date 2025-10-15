const v5 = new ArrayBuffer(22, { maxByteLength: 446213803 });
const v7 = new Float32Array(v5);
const v8 = class {
}
function f9() {
    v7["includes"]("includes");
    return v8;
}
Object.defineProperty(v8, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f9 });
try { new Int32Array(v8); } catch (e) {}
