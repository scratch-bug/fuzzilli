const v4 = class {
}
function f5() {
    const v7 = { maxByteLength: 64 };
    const v8 = new ArrayBuffer(Int8Array, v7);
    const v9 = new Int8Array(v8);
    function f10(a11, a12, a13) {
        return v8;
    }
    const v16 = [616786185,v7,v9];
    Worker(f10, { arguments: v16, type: "function" });
    return Worker;
}
Object.defineProperty(v4, Symbol.iterator, { configurable: true, enumerable: true, value: f5 });
try { new Int32Array(v4); } catch (e) {}
