function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new BigInt64Array("65535");
    const v7 = v6.join(BigInt64Array);
    try { v7.match(v7); } catch (e) {}
}
new F1();
