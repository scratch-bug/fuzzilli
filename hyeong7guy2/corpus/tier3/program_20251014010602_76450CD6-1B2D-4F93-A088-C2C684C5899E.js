const v0 = {};
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.__lookupSetter__("seal");
}
new F2();
async function f10(a11, a12) {
    return F2;
}
const v13 = f10.constructor;
try { v13(v0); } catch (e) {}
