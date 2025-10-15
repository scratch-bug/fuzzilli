class C1 {
}
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a4[Symbol.toStringTag] = this;
    const v8 = a5.constructor;
    try { new v8(); } catch (e) {}
}
const v10 = new F2(C1, C1);
new F2(v10, v10);
