function f0() {
    const t1 = Intl.DateTimeFormat;
    return t1("uk");
}
({ construct: f0 }).construct();
