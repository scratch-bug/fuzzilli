function f0() {
    return f0;
}
function f1() {
    const v2 = {};
    function f3(a4) {
        return f1;
    }
    v2.set = f3;
    return v2;
}
const v5 = {};
v5.getOwnPropertyDescriptor = f1;
const v7 = new Proxy(f0, v5);
try { v7.propertyIsEnumerable(f1, Proxy, v5, f1, f1); } catch (e) {}
