class C0 {
}
const v1 = new C0();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
class C6 extends F2 {
}
function f8(a9) {
    Object.defineProperty(C6, f8, a9);
    return Object;
}
WeakSet.constructor = f8;
const t13 = WeakSet.constructor;
t13(v1);
