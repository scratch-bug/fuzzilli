function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Intl.ListFormat;
    new t2("ebu");
}
new F0();
