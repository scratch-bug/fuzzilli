function f0() {
    const v2 = Intl.DateTimeFormat;
    const v3 = v2(Intl, v2);
    v3.formatToParts();
    return v3;
}
({ construct: f0 }).construct();
