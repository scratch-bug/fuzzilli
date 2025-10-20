const v2 = new Int8Array(8);
function f3() {
    return v2;
}
function f5() {
    return f3;
}
function f6(a7) {
    return Int8Array;
}
Object.defineProperty(Date, Symbol.split, { enumerable: true, get: f5, set: f6 });
const v11 = Date().split(Date);
const v16 = new SharedArrayBuffer(2853, { maxByteLength: 2853 });
const v18 = new Int16Array(v16);
v18.set(v11);
