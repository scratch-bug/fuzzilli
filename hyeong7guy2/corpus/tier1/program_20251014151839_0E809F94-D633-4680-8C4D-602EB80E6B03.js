function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    a4--;
    this.c = a4;
}
const v6 = new F2(65536);
new F2();
const v8 = new F2(917541942n);
const v9 = v8.constructor;
v9.prototype = v9;
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    a12.d = a12;
}
new F10(v6);
