function f0() {
    return f0;
}
function f1() {
    Math.log10(268435441);
    return {};
}
const v8 = new Proxy(f0, { construct: f1 });
new v8();
