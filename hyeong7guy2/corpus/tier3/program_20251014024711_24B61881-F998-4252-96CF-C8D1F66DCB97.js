const v1 = class extends Date {
}
const v2 = new v1();
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v2;
}
const v10 = new F4();
v10.c.setMinutes(v1, 2);
