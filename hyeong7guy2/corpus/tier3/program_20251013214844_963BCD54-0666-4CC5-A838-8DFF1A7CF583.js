class C0 {
}
const v1 = class {
    static {
        super[C0] = C0;
    }
}
const v4 = Array(Array);
const v5 = [-268435456,65537,2147483648,4294967297,-26468];
const v6 = class extends Array {
}
const v7 = new v6();
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = this.constructor;
    try { new v12(v7, a10); } catch (e) {}
    a11.keys(a10, v5, v1);
}
new F8(v5, v4);
