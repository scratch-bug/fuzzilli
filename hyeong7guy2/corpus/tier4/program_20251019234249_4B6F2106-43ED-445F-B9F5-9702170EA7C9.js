function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
function f3(a4, a5) {
    return Symbol;
}
F0[Symbol.toPrimitive] = f3;
try { ("DZg").normalize(F0); } catch (e) {}
