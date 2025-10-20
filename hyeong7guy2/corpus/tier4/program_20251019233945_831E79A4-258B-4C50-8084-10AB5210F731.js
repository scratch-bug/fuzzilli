function f0(a1, a2, a3) {
    const v4 = [-2.2250738585072014e-308,-1.2754480537603652e+308,4.591520346264684,5.214378014935059];
    const v5 = v4[2];
    Intl.maximumSignificantDigits = v5;
    Intl.NumberFormat(v5, Intl).resolvedOptions();
    return v4;
}
new Promise(f0);
