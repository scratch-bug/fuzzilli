function f0() {
    return f0;
}
function f1() {
    return {};
}
const v3 = {};
v3.getOwnPropertyDescriptor = f1;
const v5 = new Proxy(f0, v3);
try { v5.propertyIsEnumerable(); } catch (e) {}
