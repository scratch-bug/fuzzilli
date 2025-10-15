class C0 {
    #b;
}
const v1 = new C0();
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = this.constructor;
    try { new v8(a5, v1); } catch (e) {}
    const v10 = a4.constructor;
    new v10(this, v1, v10, a4, this);
}
new F2(v1);
