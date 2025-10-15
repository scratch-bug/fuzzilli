const v0 = {};
function f2() {
    return Proxy;
}
const v3 = new Proxy(f2, v0);
const v5 = [0];
v5.fill(v3);
v5.flat();
