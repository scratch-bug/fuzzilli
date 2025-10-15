function f0() {
    return f0;
}
const v1 = {};
v1.get = f0;
function f3() {
    return f3;
}
function f4() {
    return f0;
}
function f5(a6) {
    return f4;
}
Object.defineProperty(f3, Symbol.isConcatSpreadable, { enumerable: true, get: f4, set: f5 });
const v9 = new Proxy(f3, v1);
([-9007199254740991]).concat.call(v9);
