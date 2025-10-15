function F0() {
    if (!new.target) { throw 'must be called with new'; }
    gc();
}
new F0();
new F0();
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    try { new F6(a9, a10, this, a9); } catch (e) {}
    /xyz?ab|c/usd;
}
new F6();
