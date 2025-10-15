class C0 {
}
function f1(a2, a3) {
    const v4 = {};
    function f5() {
    }
    v4.set = f5;
    function f7() {
        return f7;
    }
    const v8 = new Proxy(f7, v4);
    v8.prototype = v8;
    return a2;
}
Object.defineProperty(C0, "constructor", { writable: true, enumerable: true, value: f1 });
const v9 = C0.constructor;
v9(v9, C0, f1, v9);
