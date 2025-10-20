const v0 = [0.0795394693660193];
function f1() {
    return v0;
}
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a4;
}
const v5 = new F2(f1);
const v6 = v5.g();
const t9 = Intl.NumberFormat;
t9().formatToParts(v6);
