const v0 = {};
function f2() {
    return Proxy;
}
const v3 = new Proxy(f2, v0);
Reflect.preventExtensions(f2);
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    a8[0] = a8;
}
new F6(v3);
