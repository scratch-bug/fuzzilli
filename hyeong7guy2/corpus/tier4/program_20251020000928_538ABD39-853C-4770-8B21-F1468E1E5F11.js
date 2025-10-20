function f2() {
    const t1 = Temporal.PlainDate;
    const v5 = new t1(1868, 2, 2);
    const v6 = {};
    v6.millisecond = v6;
    v5.toPlainDateTime(v6);
    return 1868;
}
try { f2(); } catch (e) {}
