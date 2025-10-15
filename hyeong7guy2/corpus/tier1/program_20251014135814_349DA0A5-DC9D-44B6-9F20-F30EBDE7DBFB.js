function f0() {
    const v2 = Intl.DateTimeFormat;
    v2("uk");
    return v2;
}
const v5 = { construct: f0 };
v5.construct(v5, v5, v5, f0);
