function f1() {
    return -65536;
}
function f2() {
    return f1;
}
const v3 = {};
v3.getOwnPropertyDescriptor = f1;
const v5 = new Proxy(f2, v3);
try { v5.propertyIsEnumerable(f2); } catch (e) {}
