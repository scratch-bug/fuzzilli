const v2 = new Float64Array(140);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9) {
        v2.sort(a9);
    }
    Object.defineProperty(this, "toString", { writable: true, value: f7 });
    const v11 = this.constructor;
    try { new v11(); } catch (e) {}
    Object.defineProperty(v2, 2, { writable: true, value: this });
}
new F3();
