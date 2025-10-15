const v1 = Symbol.iterator;
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        return v1;
    }
    function f6(a7) {
        Symbol.keyFor(v1);
        return a7;
    }
    Object.defineProperty(this, "d", { configurable: true, enumerable: true, get: f5, set: f6 });
    this.d = a4;
}
new F2();
