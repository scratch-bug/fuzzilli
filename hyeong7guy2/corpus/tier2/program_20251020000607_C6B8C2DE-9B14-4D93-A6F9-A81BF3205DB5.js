function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.Duration;
    const v10 = new t2(7, 1073741823, 1319652972, 1786, 1319652972, 1073741823, 1073741823, a7);
    v10.with(v10);
}
new F4(F4, 1319652972);
