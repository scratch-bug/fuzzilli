function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Intl.Collator;
    t2(a3, a3);
}
new F0(F0, F0);
