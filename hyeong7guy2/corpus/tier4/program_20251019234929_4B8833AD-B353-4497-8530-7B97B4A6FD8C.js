function f0() {
    return f0;
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
F1[Symbol.match] = f0;
try { ("round").startsWith(F1); } catch (e) {}
