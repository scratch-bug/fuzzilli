const v1 = class extends Array {
}
function f2() {
    return Array;
}
function f3() {
    const v4 = { a: v1 };
    delete v4.a;
    return v4;
}
const v6 = {};
v6.getOwnPropertyDescriptor = f3;
const v8 = new Proxy(f2, v6);
try { v8.bind(); } catch (e) {}
