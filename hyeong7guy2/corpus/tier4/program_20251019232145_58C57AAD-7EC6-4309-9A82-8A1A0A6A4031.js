function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
F1.prototype = F1;
const v4 = new F1();
class C5 extends Date {
}
const v6 = new C5();
try { v6.setUTCFullYear(v6, v4); } catch (e) {}
