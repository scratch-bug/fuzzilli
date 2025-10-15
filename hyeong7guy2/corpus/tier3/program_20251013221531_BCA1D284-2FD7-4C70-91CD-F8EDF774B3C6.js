const v3 = class extends Array {
}
const v4 = new v3();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = this.constructor;
    try { new v9(v4, a7); } catch (e) {}
    try { a8.keys(); } catch (e) {}
    this.b = -24723n;
}
const v12 = new F5();
new F5(v12, F5);
new F5(646);
