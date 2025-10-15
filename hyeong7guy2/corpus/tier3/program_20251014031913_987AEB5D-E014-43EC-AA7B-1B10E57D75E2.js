const v0 = class {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
F1.minute = v0;
const v4 = Temporal.PlainTime;
try { v4.compare(F1); } catch (e) {}
