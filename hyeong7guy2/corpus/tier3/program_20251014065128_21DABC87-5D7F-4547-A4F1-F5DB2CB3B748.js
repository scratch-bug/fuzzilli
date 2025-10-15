function f0() {
}
function f1() {
    return f0;
}
const v2 = {};
v2.getPrototypeOf = f0;
const v4 = new Proxy(f1, v2);
try { v4.bind(); } catch (e) {}
