function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = a2 >> a2;
    v3 >> v3;
    const v5 = this.constructor;
    try { new v5(this); } catch (e) {}
}
const v7 = new F0(F0);
new F0(v7);
