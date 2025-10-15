const v0 = {};
function f1(a2) {
    function f3() {
        return a2;
    }
    return f3;
}
v0.set = f1;
function f5() {
    return Proxy;
}
function f6(a7) {
    return f5;
}
Object.defineProperty(f5, "d", { enumerable: true, set: f6 });
const v8 = new Proxy(f5, v0);
v8.d = v8;
