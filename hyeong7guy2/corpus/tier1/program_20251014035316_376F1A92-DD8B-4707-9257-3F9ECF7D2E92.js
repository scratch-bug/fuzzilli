let v0 = -2147483648;
++v0;
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this.constructor;
    try { new v7(); } catch (e) {}
    this.a = v0;
}
new F2(F2, F2, F2);
new F2();
