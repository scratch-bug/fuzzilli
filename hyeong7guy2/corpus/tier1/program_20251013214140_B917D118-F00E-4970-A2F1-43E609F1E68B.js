const v1 = [1];
function f2() {
    v1[9] = 1.1;
    return {};
}
const v5 = { construct: f2 };
function f7() {
    return Proxy;
}
const v8 = new Proxy(f7, v5);
new v8();
v1[0];
