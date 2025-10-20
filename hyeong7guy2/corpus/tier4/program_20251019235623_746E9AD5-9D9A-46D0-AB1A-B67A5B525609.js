const v0 = {};
function f1(a2, a3) {
    return 64;
}
v0.get = f1;
function f6() {
    return f1;
}
const v7 = new Proxy(f6, v0);
new v7();
