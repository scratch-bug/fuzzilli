function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        return a5;
    }
    Object.defineProperty(this, "g", { configurable: true, set: f4 });
}
new F0(F0, F0);
new F0();
