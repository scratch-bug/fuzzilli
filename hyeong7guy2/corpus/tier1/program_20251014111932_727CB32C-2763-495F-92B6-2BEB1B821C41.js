function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
class C5 extends F0 {
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    C5.d <<= 1e-15;
    try {
        new F7();
    } catch(e12) {
    }
}
new F7();
new F7();
