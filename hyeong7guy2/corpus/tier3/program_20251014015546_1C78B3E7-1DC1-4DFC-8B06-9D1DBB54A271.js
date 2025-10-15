const v1 = {};
function f2(a3, a4) {
    return a4;
}
v1.get = f2;
function f5() {
    return f5;
}
const v6 = new Proxy(f5, v1);
Reflect.construct(v6, [Proxy,Proxy,Proxy]);
