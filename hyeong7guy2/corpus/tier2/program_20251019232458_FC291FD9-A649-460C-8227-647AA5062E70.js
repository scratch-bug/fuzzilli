function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.Duration;
    const v9 = new t2(7, 1073741823, 1319652972, a6);
    v9.with(v9);
}
new F3(F3, 1319652972);
