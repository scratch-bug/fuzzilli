function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.Duration;
    const v12 = new t2(7, 1073741823, 1319652972, 1786, 1319652972, 1073741823, 1073741823, a9);
    const t4 = this.constructor.constructor;
    t4(v12);
}
try { new F6(1487, 251); } catch (e) {}
