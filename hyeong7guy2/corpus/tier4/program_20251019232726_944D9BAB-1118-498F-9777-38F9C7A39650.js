function f0() {
    return f0;
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function F5() {
    if (!new.target) { throw 'must be called with new'; }
}
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    const v15 = this.constructor;
    try { new v15(F1, a14, 128, 128); } catch (e) {}
    a12.__proto__;
}
const v18 = new F9(4, F5, 4, f0);
new F9(v18, 4);
