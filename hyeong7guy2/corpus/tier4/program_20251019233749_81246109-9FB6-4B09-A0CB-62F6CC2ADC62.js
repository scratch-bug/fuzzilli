function F2() {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = ("NFKD").constructor.fromCodePoint(1403);
    v5.toLocaleUpperCase(this, v5, this, v5, F2);
}
new F2();
