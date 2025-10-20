const v5 = new SharedArrayBuffer(6, { maxByteLength: 248 });
const v7 = new Uint32Array(v5);
function f8(a9) {
    return a9.indexOf(1073741825);
}
Object.defineProperty(v7, "constructor", { writable: true, enumerable: true, value: f8 });
const t6 = v7.constructor;
t6(v7);
