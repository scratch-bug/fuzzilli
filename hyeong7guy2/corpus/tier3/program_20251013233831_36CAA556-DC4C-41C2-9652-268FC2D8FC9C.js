function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a4;
    this.f = a2;
}
const v6 = new F0(F0);
const v7 = v6.f;
v7.prototype = v7;
new v7();
gc();
new F0(v7, F0, v6, gc);
