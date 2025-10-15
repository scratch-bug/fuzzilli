function f0() {
    return f0;
}
const v1 = {};
v1.getPrototypeOf = f0;
const v3 = new Proxy(f0, v1);
v3.bind(v1, f0, v1, v3, v1);
