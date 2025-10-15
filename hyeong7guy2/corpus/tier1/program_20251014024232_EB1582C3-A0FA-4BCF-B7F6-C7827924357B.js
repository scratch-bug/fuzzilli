const v2 = new Float64Array(140);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this.constructor;
    try { new v7(v7, Float64Array, F3, 140, 140); } catch (e) {}
    Object.defineProperty(v2, 5, { writable: true, value: this });
}
new F3();
