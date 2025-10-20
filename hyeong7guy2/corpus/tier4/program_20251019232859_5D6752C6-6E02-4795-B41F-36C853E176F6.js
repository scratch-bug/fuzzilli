function f1() {
    return 1024;
}
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = [-2.0];
    v4.toString = f1;
    const v6 = Intl.NumberFormat;
    v6(F2, { notation: "compact" }).formatRange(v4, v4);
}
new F2();
