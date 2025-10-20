const v1 = class {
}
function f2() {
    const v5 = { maxByteLength: 13 };
    let v6 = 7;
    v6++;
    const v8 = new ArrayBuffer(v6, v5);
    const v10 = new Int8Array(v8);
    v10.slice();
    return v6;
}
Object.defineProperty(v1, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f2 });
try { new Int32Array(v1); } catch (e) {}
