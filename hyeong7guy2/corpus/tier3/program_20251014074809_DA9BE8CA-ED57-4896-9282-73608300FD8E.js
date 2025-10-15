function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    a3.ignorePunctuation = 3.0;
    const t3 = Intl.Collator;
    t3(a4, a4);
}
new F1(F1, F1);
