function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.PlainTime;
    new t2(a2);
}
const v7 = new F0();
const v8 = v7.constructor;
try { new v8(v7); } catch (e) {}
