class C0 {
}
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a3.caller = a3;
}
const v7 = new F1(F1);
const v8 = v7.constructor;
try { new v8(C0); } catch (e) {}
