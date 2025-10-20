function f0() {
    return f0;
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
class C5 extends F1 {
}
const v6 = new C5();
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function F12(a14, a15, a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v18 = F12.constructor;
    try { v18(undefined, undefined, v6, f0); } catch (e) {}
}
new F7();
