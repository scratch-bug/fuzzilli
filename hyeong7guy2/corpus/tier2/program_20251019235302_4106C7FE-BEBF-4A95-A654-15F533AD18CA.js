function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.Duration;
    const v7 = new t2(a4);
    v7.with(v7);
}
new F1(F1, 1319652972);
