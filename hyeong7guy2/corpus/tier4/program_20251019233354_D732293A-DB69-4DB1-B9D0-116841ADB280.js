function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new Float32Array(this);
    const t3 = Intl.PluralRules;
    const v11 = new t3("so");
    v11.select(v7);
}
new F0();
