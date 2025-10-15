function f0(a1) {
    return a1;
}
const v3 = {};
v3.defineProperty = Symbol;
function f5() {
    return f0;
}
const v6 = new Proxy(f5, v3);
v6[Symbol] = f0;
