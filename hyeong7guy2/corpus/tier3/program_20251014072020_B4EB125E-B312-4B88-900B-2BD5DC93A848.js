function f0() {
    return f0;
}
function f1() {
    return f0;
}
function f2() {
    return 255;
}
f1.toString = f2;
const v6 = new Proxy(f0, {});
v6.propertyIsEnumerable(f1);
