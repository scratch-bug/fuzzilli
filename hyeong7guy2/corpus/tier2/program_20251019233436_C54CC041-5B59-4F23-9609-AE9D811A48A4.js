const v2 = class {
}
function f3() {
    const v8 = new ArrayBuffer(7, { maxByteLength: 13 });
    const v10 = new Int8Array(v8);
    function f11(a12, a13, a14) {
        return a12;
    }
    const v17 = [3827,v8,v10];
    Worker(f11, { arguments: v17, type: "function" });
    return ArrayBuffer;
}
Object.defineProperty(v2, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f3 });
try { new Int32Array(v2); } catch (e) {}
