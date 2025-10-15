function f0() {
    return f0;
}
function f1() {
    const v2 = {};
    ~"🙌🏿";
    return v2;
}
const v5 = { construct: f1 };
const v7 = new Proxy(f0, v5);
new v7(f0, Proxy, v5);
