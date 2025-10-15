function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function f3(a4, a5) {
        const v7 = Intl.DateTimeFormat;
        v7("ss", { dateStyle: "full", formatMatcher: "basic", timeZoneName: "longGeneric" });
        return f3;
    }
    this.constructor = f3;
    const v14 = this.constructor;
    try { v14(); } catch (e) {}
}
new F0(F0);
