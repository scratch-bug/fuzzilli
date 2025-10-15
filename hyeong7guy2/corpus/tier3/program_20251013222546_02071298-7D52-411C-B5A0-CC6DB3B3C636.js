function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    Math.cosh(7);
}
new F0(F0);
