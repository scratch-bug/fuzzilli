function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function f3(a4, a5) {
        const v7 = Intl.DateTimeFormat;
        const v10 = { dateStyle: "short" };
        v7("ss", v10).resolvedOptions();
        return v10;
    }
    this.constructor = f3;
    const v13 = this.constructor;
    v13(F0, a2, F0, v13);
}
new F0(F0);
