function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = this.constructor;
    try { new v11(a10, a10, 128, 128); } catch (e) {}
    a10.__proto__;
    a10.g;
}
const v15 = new F5(4, F0, 4, v2);
new F5(v15, 4, v15, v15);
