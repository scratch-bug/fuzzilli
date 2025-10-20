function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = Intl.ListFormat;
    const v8 = new v4("dsb", { style: "narrow" });
    v8.resolvedOptions();
}
new F0();
