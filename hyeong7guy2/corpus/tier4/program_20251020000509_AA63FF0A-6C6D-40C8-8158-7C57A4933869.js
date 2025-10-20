function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3) {
    return F0;
}
class C4 extends f2 {
}
F0 &= C4;
const v7 = Date.prototype.toGMTString;
try { v7.apply(F0); } catch (e) {}
