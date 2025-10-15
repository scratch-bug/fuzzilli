function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        for (const v6 in this) {
        }
        return a3;
    }
    Object.defineProperty(this, "g", { configurable: true, set: f4 });
    this.g = a3;
}
new F0();
new F0(F0, F0);
