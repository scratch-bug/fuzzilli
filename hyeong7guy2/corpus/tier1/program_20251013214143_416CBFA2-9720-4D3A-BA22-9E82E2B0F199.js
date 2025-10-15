function f0() {
    return f0;
}
const v1 = [];
function f2() {
    v1[9] = 1.1;
    return {};
}
const v5 = { construct: f2 };
const v7 = new Proxy(f0, v5);
v1.unshift(v7);
new v7(f0, v5);
