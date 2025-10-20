class C0 {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = Object.freeze([a3]);
    try { v7.findLast(a3); } catch (e) {}
}
const v9 = new F1(F1, F1);
const t8 = v9.constructor;
new t8(C0);
