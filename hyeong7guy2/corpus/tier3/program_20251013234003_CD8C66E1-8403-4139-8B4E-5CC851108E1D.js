function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = Uint32Array;
}
F2[0] = 2147483647;
const v6 = new F2();
const t6 = v6.a;
new t6(F2);
