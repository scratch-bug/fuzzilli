function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { new v5(); } catch (e) {}
    function f7() {
        function f8(a9) {
            Math.asinh([a9,a9]);
            return F0;
        }
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
    this.toString();
}
new F0();
