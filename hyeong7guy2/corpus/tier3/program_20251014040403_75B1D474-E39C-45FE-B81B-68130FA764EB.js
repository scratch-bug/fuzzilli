class C1 extends Uint8ClampedArray {
}
const v2 = new C1();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a5;
}
const v7 = new F3(v2);
v7.c.filter(F3);
