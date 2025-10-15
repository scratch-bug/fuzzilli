function f0() {
    return f0;
}
function f1() {
    const v2 = {};
    ("🙌🏿").fixed();
    return v2;
}
const v7 = new Proxy(f0, { construct: f1 });
new v7();
