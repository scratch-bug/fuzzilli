const v3 = new Uint32Array();
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this.constructor;
    try { new v7(); } catch (e) {}
    this.e = a6;
}
const v9 = class extends F4 {
    [v3];
}
new v9();
new BigUint64Array(1073741825);
