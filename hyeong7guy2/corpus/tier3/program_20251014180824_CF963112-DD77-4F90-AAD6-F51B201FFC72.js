function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = this.constructor;
    let v5;
    try { v5 = new v4(); } catch (e) {}
    this.g = v5;
}
new F0();
const v7 = new F0();
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
}
new F8(v7);
gc();
