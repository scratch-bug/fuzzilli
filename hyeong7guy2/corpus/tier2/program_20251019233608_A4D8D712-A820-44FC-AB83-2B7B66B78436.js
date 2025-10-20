const v0 = [0.9312397451919029,Infinity,1.7976931348623157e+308];
function f1() {
    return v0;
}
function f3() {
    return f1;
}
function f4(a5) {
    return f4;
}
Object.defineProperty(Date, Symbol.split, { enumerable: true, get: f3, set: f4 });
const v9 = Date(f4).split(Date);
const v14 = new SharedArrayBuffer(2853, { maxByteLength: 2853 });
const v16 = new Int16Array(v14);
v16.set(v9);
