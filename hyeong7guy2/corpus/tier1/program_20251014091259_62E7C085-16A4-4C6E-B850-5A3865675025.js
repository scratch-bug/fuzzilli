function f0() {
    return f0;
}
function f1() {
    const v2 = {};
    v2.writable = v2;
    return v2;
}
const v3 = {};
v3.getOwnPropertyDescriptor = f1;
const v5 = new Proxy(f0, v3);
try { v5.bind(); } catch (e) {}
