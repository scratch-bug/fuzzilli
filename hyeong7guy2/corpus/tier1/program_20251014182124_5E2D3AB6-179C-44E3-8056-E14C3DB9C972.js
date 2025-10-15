function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.PlainTime;
    const v7 = new t2(a4);
    v7.round(1000);
}
try { new F1(); } catch (e) {}
