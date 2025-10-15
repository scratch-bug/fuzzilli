const v0 = [16,-15,1000,-4294967296,1073741824,51600,61480,-2];
const v2 = Array(v0);
const v3 = class extends Array {
}
const v4 = new v3();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    a8.pop(a8, this, a7, a7);
    const v10 = this.constructor;
    try { new v10(v4, a7); } catch (e) {}
}
new F5(v0, v0);
new F5(v2, v2);
