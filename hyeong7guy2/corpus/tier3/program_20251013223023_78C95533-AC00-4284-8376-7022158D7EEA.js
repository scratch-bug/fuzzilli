class C1 extends Uint8Array {
}
const v2 = new C1();
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    a5[0] = a5;
}
const v8 = new F3(F3);
const t8 = v8.constructor;
new t8(v2);
