function F0() {
    if (!new.target) { throw 'must be called with new'; }
    gc();
}
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    try { new F6(F0, v5, F6, a9); } catch (e) {}
    /a(?!bbb|bb)c/sygmvi;
}
new F6(F6, v4, v5, v4);
