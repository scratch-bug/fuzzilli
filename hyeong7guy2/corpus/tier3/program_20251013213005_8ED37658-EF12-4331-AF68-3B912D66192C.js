function f0(a1) {
    return a1;
}
class C2 extends f0 {
}
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    try { a7.fromEntries(f0); } catch (e) {}
    with (this) {
        new C2();
    }
}
new F3(F3, f0, f0);
