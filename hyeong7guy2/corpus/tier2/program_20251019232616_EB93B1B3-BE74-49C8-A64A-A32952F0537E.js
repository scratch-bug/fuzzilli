const v2 = new Int32Array(5);
function f3() {
    return v2;
}
const v8 = new SharedArrayBuffer(6, { maxByteLength: 248 });
const v10 = new Uint32Array(v8);
function f11(a12) {
    return a12.slice(f11, 248, a12, f11);
}
function f14() {
    return f3;
}
function f15(a16) {
    return f3;
}
Object.defineProperty(f11, Symbol.species, { enumerable: true, get: f14, set: f15 });
Object.defineProperty(v10, "constructor", { writable: true, enumerable: true, value: f11 });
const t17 = v10.constructor;
t17(v10);
