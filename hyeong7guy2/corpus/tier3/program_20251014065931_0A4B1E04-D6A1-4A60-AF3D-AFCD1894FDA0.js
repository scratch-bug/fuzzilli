function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.__defineSetter__(a3, F1);
}
new F1(133);
