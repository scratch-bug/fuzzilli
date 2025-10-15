function f0() {
    const t1 = Temporal.PlainDate;
    const v5 = new t1(15, 5, 5);
    v5.equals(f0);
    return 15;
}
try { f0.apply(); } catch (e) {}
