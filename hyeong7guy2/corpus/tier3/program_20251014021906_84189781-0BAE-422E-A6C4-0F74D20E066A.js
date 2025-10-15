class C1 extends Date {
}
const v2 = new C1();
const v3 = v2.setFullYear();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    a7.getFullYear(v3, Date, a7);
}
new F4(C1, v2);
