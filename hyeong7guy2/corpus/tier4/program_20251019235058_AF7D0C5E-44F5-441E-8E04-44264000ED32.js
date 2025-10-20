function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = Intl.ListFormat;
    new v4("io", { localeMatcher: "best fit" });
}
new F0();
