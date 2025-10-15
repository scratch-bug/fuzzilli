const v3 = new Uint8Array();
function f6() {
    return "bigint";
}
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    const v13 = this.constructor;
    try { new v13(this, 6, a12, a11); } catch (e) {}
    a11.d = 16n;
}
new F7(6, f6, Uint8Array, 6);
new F7("bigint", 16n, v3, 8);
