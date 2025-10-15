function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function* f3(a4, a5, a6, a7) {
    return F0;
}
const v8 = f3.constructor;
try { v8(v2); } catch (e) {}
