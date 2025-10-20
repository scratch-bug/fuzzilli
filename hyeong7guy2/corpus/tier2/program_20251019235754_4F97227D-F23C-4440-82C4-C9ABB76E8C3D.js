const v4 = new SharedArrayBuffer(6, { maxByteLength: 248 });
const v6 = new Uint32Array(v4);
function f7(a8) {
    return a8.slice();
}
Object.defineProperty(v6, "constructor", { writable: true, enumerable: true, value: f7 });
const t6 = v6.constructor;
t6(v6);
