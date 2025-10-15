function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
function f6(a7) {
    Error.prepareStackTrace = a7;
    return Error().stack;
}
try { f6(F0); } catch (e) {}
