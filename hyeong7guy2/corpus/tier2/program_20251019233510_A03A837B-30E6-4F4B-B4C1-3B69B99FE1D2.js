const v1 = class {
}
function f2() {
    const v3 = %WasmStruct();
    for (const v4 in v3) {
    }
    return Int32Array;
}
Object.defineProperty(v1, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f2 });
try { new Int32Array(v1); } catch (e) {}
