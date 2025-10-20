function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v2 = [-2.0];
    const v4 = Intl.NumberFormat;
    v4(F0, { compactDisplay: "long", notation: "compact" }).formatRange(v2, v2);
}
new F0();
