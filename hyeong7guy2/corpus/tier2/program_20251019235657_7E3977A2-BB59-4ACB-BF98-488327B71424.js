function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    --F0;
    const v6 = class extends Date {
    }
    const v7 = new v6();
    const v8 = v7.toTemporalInstant();
    v8.fractionalSecondDigits = F0;
    v8.toString(v8);
}
try { new F0(F0, F0, F0); } catch (e) {}
