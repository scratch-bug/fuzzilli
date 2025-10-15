function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    try { Object.getOwnPropertySymbols(); } catch (e) {}
    return f2;
}
F0.constructor = f2;
class C7 extends F0 {
    static {
        class C10 extends this.constructor {
        }
        new C10();
    }
}
