function f0() {
}
function f1() {
    const v2 = {};
    const t3 = "🙌🏿";
    t3[2] = "🙌🏿";
    function f5() {
        return -9007199254740992;
    }
    (0).propertyIsEnumerable(f5);
    return v2;
}
const v10 = new Proxy(f0, { construct: f1 });
new v10();
