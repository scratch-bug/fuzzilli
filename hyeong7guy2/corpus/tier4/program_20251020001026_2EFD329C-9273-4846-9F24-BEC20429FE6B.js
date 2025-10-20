function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    a6.__defineGetter__(1024, F2);
}
new F2(9007199254740990n, 9007199254740990n, 9007199254740990n);
