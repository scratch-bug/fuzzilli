const v4 = class extends Array {
}
const v5 = new v4(9);
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = this.constructor;
    try { new v10(v5, a8); } catch (e) {}
    try { a9.keys(); } catch (e) {}
}
new F6(Uint8Array, -12n);
new F6();
