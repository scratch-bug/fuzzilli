const v5 = new SharedArrayBuffer(6, { maxByteLength: 248 });
const v7 = new Uint32Array(v5);
function f8(a9) {
    return a9.slice();
}
Object.defineProperty(v7, "constructor", { writable: true, enumerable: true, value: f8 });
const v11 = v7.constructor;
function f12(a13, a14) {
    return v7;
}
v11[Symbol.species] = f12;
v11(v7);
