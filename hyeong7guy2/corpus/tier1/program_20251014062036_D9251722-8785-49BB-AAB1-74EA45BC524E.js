function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a4;
}
const v7 = new F2(5.0);
new F2(1e-15);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    v7[0] = 97;
}
new F9(F2, 1e-15);
