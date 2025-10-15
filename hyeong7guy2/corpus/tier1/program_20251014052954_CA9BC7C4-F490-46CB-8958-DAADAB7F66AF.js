function f1() {
    return -9007199254740991;
}
function f2() {
    const v3 = {};
    Date["UTC"](-25547, -25547, -25547, -9007199254740991);
    return v3;
}
const v10 = new Proxy(f1, { construct: f2 });
new v10();
