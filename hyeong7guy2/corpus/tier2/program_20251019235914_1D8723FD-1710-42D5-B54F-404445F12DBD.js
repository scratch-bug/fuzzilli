function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -9223372036854775808;
}
try {
    const v8 = Intl.NumberFormat;
    v8("yue", { unit: F1 });
} catch(e12) {
}
