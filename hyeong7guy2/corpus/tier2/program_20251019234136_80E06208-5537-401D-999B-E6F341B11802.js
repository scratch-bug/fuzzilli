function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        return F0;
    }
    Object.defineProperty(this, "g", { configurable: true, set: f4 });
    Object.defineProperty(this, "g", { get: f4 });
}
new F0();
