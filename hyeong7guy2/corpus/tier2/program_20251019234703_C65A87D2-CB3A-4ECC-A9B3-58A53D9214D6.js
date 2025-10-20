const v1 = {};
v1.defineProperty = Symbol;
function f3() {
    return Symbol;
}
const v4 = new Proxy(f3, v1);
function f5() {
    return f5;
}
Object.defineProperty(v4, "toString", { configurable: true, enumerable: true, get: f5 });
