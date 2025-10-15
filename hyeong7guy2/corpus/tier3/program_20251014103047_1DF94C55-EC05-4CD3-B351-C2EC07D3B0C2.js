function f1() {
    return 8;
}
const t3 = Intl.NumberFormat;
const v4 = t3();
v4.valueOf = f1;
v4.formatRange(v4, v4);
