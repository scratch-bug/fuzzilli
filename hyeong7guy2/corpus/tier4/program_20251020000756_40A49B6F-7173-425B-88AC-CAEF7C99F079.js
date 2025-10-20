function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = new BigInt64Array(1073741824);
    v7.fill("-4096");
}
new F1(1073741824, 1073741824);
