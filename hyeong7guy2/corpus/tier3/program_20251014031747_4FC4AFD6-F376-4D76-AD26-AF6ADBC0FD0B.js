function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    a3.arguments;
}
const v5 = new F1(F1);
const v6 = v5.constructor;
try { new v6(BigUint64Array); } catch (e) {}
