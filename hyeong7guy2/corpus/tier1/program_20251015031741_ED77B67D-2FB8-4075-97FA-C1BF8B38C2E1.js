const v1 = {};
v1.defineProperty = Symbol;
function f3() {
    return f3;
}
const v4 = new Proxy(f3, v1);
Object.defineProperty(v4, Symbol, { writable: true, value: Symbol });
