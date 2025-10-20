function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4(a5) {
    return -10;
}
F1[Symbol.toPrimitive] = f4;
try { ("DZg").normalize(F1); } catch (e) {}
