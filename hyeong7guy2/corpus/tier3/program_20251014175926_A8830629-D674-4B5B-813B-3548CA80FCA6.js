try {
    const v2 = Intl.NumberFormat;
    const v3 = {};
    v3.toString = Symbol;
    v3.currency = v3;
    v2(v3, v3);
} catch(e5) {
}
