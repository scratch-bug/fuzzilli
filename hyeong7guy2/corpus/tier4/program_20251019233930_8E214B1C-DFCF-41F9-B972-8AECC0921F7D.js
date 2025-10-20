function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a2;
}
const v3 = new F0(F0);
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    Object.values(v3);
}
new F4(v3, v3);
