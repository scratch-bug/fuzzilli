function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = Intl.NumberFormat;
    v5("twq", { currency: "CNH", style: "currency" }).format(a2);
}
new F0(F0, F0);
