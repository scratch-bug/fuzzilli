function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = this.constructor;
    try { new v9(a7, this); } catch (e) {}
    Object.getOwnPropertyNames(a6);
}
new F4(F0);
