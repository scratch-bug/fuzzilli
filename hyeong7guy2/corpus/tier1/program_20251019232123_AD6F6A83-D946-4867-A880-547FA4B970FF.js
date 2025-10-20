function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    a5--;
    this.c = a5;
}
const v7 = new F3(65536);
v7.d = 8n;
new F3();
const v9 = new F3(917541942n);
const v10 = v9.constructor;
v10.prototype = v10;
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    a13.d = a13;
}
new F11(v7);
