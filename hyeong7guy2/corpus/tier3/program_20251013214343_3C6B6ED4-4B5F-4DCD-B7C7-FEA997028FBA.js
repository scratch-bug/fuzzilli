function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.hasOwnProperty(a4);
}
new F1(15n, 15n);
class C7 extends F1 {
}
function f9(a10) {
    try { a10(); } catch (e) {}
    Object.defineProperty(C7, f9, a10);
    return C7;
}
WeakSet.constructor = f9;
const t13 = WeakSet.constructor;
t13(f9);
