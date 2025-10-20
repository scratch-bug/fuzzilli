class C1 extends Date {
}
const v2 = new C1();
const v3 = v2.toISOString();
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    Date.parse(v3);
}
new F4(v2, v3, Date);
