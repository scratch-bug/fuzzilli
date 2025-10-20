function f1(a2) {
    return a2;
}
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.constructor = f1;
    function f8() {
        return Infinity;
    }
    function f9(a10) {
        return this;
    }
    Object.defineProperty(a7, "length", { get: f8, set: f9 });
}
const v11 = new F3(F3, f1, f1);
v11.constructor.bind();
