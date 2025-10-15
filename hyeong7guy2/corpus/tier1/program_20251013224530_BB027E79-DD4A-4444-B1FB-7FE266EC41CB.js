function f1() {
    return f1;
}
const v2 = class extends f1 {
}
function f3() {
    return v2;
}
function f4(a5) {
    return a5;
}
Object.defineProperty(Symbol, "a", { configurable: true, get: f3, set: f4 });
const v6 = {};
v6.set = f3;
const v8 = new Proxy(Symbol, v6);
v8.a = v8;
