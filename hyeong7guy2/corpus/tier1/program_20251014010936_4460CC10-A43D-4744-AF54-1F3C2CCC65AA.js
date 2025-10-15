function f0() {
    return f0;
}
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
    a3.__defineSetter__(a3, F1);
}
new F1(f0);
