function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        return a7;
    }
    function f9(a10) {
        const v13 = Date.prototype.setHours;
        try { v13.apply(a10); } catch (e) {}
        return a7;
    }
    Object.defineProperty(this, "h", { get: f8, set: f9 });
    this.h = a5;
}
new F2(Float64Array, 25);
