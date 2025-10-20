function f1() {
    return "Aq";
}
const v2 = {};
v2.defineProperty = f1;
function f4() {
    return v2;
}
const v5 = new Proxy(f4, v2);
function F6() {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9) {
        return this;
    }
    Object.defineProperty(v5, "valueOf", { configurable: true, enumerable: true, value: f8 });
}
new F6();
