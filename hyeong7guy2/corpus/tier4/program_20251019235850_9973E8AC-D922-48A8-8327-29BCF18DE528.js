function f2(a3, a4) {
    const t1 = Temporal.Duration;
    new t1(64, 64, 64, 64, 64, a3);
    return a4;
}
try { f2(Intl); } catch (e) {}
