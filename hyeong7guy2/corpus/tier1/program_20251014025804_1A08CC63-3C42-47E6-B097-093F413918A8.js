function f0() {
    return 96;
}
const v2 = [f0];
v2.toString = f0;
const v4 = ReferenceError(v2);
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9(a10) {
        gc();
        return a8;
    }
    Object.defineProperty(this, "g", { configurable: true, enumerable: true, set: f9 });
    this.g = a7;
}
new F5(v2, v4);
const v14 = new F5();
new F5(v14, v14);
new F5(v14, F5);
