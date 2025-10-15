function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    a3 ** a3;
}
new F1(15n);
