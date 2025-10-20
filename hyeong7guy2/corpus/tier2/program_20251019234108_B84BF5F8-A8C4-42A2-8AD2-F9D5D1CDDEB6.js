function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = class extends Temporal.PlainTime {
    }
    const v8 = new v7();
    v8.round(null);
}
try { new F1(); } catch (e) {}
