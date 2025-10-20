function f1() {
    return Infinity;
}
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.valueOf = f1;
    Math.expm1(this);
}
new F2();
