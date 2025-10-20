const v1 = [2,268435456,-26315,32790,513777402,39803];
function f2() {
    return v1;
}
function f4() {
    return f2;
}
function f5(a6) {
    return a6;
}
Object.defineProperty(Date, Symbol.split, { enumerable: true, get: f4, set: f5 });
const v9 = Date().split(Date);
const v14 = new SharedArrayBuffer(2853, { maxByteLength: 2853 });
const v16 = new Int16Array(v14);
v16.set(v9);
