function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    eval(a2);
    gc();
}
new F0(F0, F0);
