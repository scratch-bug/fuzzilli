function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
F0.millisecond = F0;
const v3 = Temporal.PlainTime;
try { v3.compare(F0); } catch (e) {}
