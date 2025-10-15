function f1() {
    return 261;
}
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    Error.prepareStackTrace = f1;
    Error().stack;
}
new F2(f1, F2, F2);
