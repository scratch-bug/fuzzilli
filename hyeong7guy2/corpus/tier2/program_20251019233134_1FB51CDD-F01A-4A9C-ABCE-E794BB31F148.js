function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.Duration;
    const v7 = new t2();
    v7.toString(a3);
}
try { new F1(2147); } catch (e) {}
