function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
class C3 extends F0 {
}
const v4 = new C3();
function f5(a6) {
    return a6;
}
class C7 extends f5 {
}
function F8(a10, a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    const t14 = a11.constructor;
    t14.__proto__ = C7;
}
new F8(F0, v4);
new F8(C3, v2);
