function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    (4.0).toExponential(a4);
}
new F1();
