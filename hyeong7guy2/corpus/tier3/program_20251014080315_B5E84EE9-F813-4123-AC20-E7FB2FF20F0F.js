function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    a3.arguments = a3;
}
const v5 = new F1(F1);
const v6 = v5.constructor;
try { new v6(WeakSet); } catch (e) {}
