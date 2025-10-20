function f0() {
    function f1() {
        return Intl;
    }
    const v3 = f1.toString();
    const v4 = { construct: f1 };
    const t6 = v4.construct(f0, f1, f0, v4, v3).ListFormat;
    const v7 = new t6();
    v7.formatToParts(v3);
    return f1;
}
f0.call(f0, f0, f0, f0);
