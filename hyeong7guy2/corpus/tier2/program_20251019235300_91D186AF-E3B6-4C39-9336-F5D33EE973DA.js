function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        return f6;
    }
    function f7(a8) {
        const v11 = Date.prototype.setHours;
        try { v11.apply(); } catch (e) {}
        return a5;
    }
    Object.defineProperty(this, "h", { get: f6, set: f7 });
    this.h = a3;
}
new F0();
