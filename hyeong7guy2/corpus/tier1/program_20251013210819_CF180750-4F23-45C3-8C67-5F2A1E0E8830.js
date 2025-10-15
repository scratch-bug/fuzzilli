function f0() {
    return f0;
}
const t3 = ({ next: f0 }).next;
new t3();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = this.constructor;
    try { new v9(a7); } catch (e) {}
    a7.length = a7;
    this.e = a7;
    this.e = WeakMap;
}
new F5(F5);
