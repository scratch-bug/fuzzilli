const v0 = [];
function f1() {
    return v0;
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
F2[Symbol.toPrimitive] = f1;
try { Intl.supportedValuesOf(F2); } catch (e) {}
