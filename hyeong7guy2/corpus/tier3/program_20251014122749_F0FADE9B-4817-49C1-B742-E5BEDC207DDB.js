function f1() {
    return Int8Array();
}
function f3() {
    return f1;
}
const v4 = {};
v4.getPrototypeOf = f1;
const v6 = new Proxy(f3, v4);
try { v6.bind(Int8Array, v6, f3); } catch (e) {}
