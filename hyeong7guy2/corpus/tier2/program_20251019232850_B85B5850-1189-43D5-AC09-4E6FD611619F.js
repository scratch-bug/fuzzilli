function f0() {
    const t1 = Intl.DateTimeFormat;
    const v3 = t1(Intl, Intl);
    v3.format();
    return v3;
}
({ construct: f0 }).construct().format;
