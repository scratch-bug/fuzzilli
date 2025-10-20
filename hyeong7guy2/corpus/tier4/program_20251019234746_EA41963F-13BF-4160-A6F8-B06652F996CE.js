function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    return 110;
}
F0[Symbol.toPrimitive] = f2;
try { ("DZg").normalize(F0); } catch (e) {}
