function f0() {
    const t1 = Intl.DateTimeFormat;
    return t1();
}
const v4 = { construct: f0 };
v4.construct(f0, f0, f0, v4, v4).format.apply();
