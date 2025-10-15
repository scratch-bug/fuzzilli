const v1 = class extends Array {
}
function f2() {
    return f2;
}
function f3() {
    const v4 = { a: v1 };
    function f5(a6) {
        return f5;
    }
    v4.set = f5;
    delete v4.a;
    return v4;
}
const v8 = {};
v8.getOwnPropertyDescriptor = f3;
const v10 = new Proxy(f2, v8);
try { v10.bind(); } catch (e) {}
