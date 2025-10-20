const v1 = Symbol();
function f2() {
    return Symbol;
}
function f3() {
    20000 instanceof v1;
    return Symbol;
}
const v6 = {};
v6.getOwnPropertyDescriptor = f3;
const v8 = new Proxy(f2, v6);
try { v8.bind(); } catch (e) {}
