function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        try {
            Array(-339025740);
        } catch(e9) {
            e9.stack;
        }
        return Array;
    }
    Object.defineProperty(this, "g", { configurable: true, enumerable: true, set: f4 });
    this.g = a2;
}
new F0(F0, F0);
new F0();
