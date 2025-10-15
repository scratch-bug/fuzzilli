function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1();
v5.length = 696198238;
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    try { a9.apply(a8, a10); } catch (e) {}
}
new F6(F1, F6, v5);
