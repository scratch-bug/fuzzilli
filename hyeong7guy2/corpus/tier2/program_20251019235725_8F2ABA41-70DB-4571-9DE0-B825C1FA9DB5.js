const v6 = new SharedArrayBuffer(6, { maxByteLength: 248 });
const v8 = new Uint32Array(v6);
function f9(a10) {
    a10.indexOf(4, 4.0);
    return a10;
}
Object.defineProperty(v8, "constructor", { writable: true, enumerable: true, value: f9 });
const t7 = v8.constructor;
t7(v8);
