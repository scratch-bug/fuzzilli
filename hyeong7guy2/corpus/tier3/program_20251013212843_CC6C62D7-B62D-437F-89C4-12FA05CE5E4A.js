function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C3 extends F0 {
    set f(a5) {
    }
}
const v6 = new C3();
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    a10.f;
}
new F7(963.8443769496266, v6);
