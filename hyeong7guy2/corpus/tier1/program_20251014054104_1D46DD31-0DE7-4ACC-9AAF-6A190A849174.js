const v1 = {};
v1.defineProperty = Symbol;
function f3() {
    return f3;
}
function f4() {
    function f5(a6, a7) {
    }
    return f5;
}
Object.defineProperty(f3, "toString", { configurable: true, get: f4 });
const v8 = new Proxy(f3, v1);
Object.defineProperty(v8, "toString", { writable: true, configurable: true, enumerable: true, value: f3 });
