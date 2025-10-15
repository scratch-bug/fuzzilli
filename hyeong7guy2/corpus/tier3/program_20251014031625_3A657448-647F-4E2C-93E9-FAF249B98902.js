function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = class extends Date {
}
const v7 = new v6(255, F1);
function F8(a10, a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v7;
}
const v14 = new F8();
v14.c.setMinutes();
