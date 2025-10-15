const v0 = /[M(a)?]/msy;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    try { new v5(v0, v0); } catch (e) {}
    a4++;
}
new F1(v0, F1);
