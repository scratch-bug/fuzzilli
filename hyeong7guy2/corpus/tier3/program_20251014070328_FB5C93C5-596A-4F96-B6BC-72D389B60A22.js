class C1 {
    [10];
}
const v2 = new C1();
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = this.constructor;
    try { new v8(a5, a6); } catch (e) {}
    const t8 = a6.constructor;
    new t8();
}
new F3(C1, v2);
