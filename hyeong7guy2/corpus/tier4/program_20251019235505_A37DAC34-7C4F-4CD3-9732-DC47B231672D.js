function f1() {
    return 268435456n;
}
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    a6[Symbol.toPrimitive] = f1;
    const v12 = Intl.Collator;
    const v14 = {};
    v14.numeric = a6;
    v12("zh", v14).compare(true, a8);
}
new F3(F3, F3, F3, F3);
