function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { new v5(); } catch (e) {}
    function f8() {
        function f9(a10) {
            const v11 = [];
            v11[11] = Infinity;
            Math.asinh(v11[4]);
        }
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
    this.toString();
}
new F0();
