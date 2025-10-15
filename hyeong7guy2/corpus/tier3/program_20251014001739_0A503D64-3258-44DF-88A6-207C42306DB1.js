function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    Object.getOwnPropertyNames(a6);
}
const v11 = new F0();
new F4(v11);
