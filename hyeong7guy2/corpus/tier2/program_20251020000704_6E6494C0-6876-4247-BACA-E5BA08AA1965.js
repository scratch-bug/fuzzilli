function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.Duration;
    const v10 = new t2(7, 1073741823, 1319652972, 4294967295);
    v10.with(v10);
}
new F4();
