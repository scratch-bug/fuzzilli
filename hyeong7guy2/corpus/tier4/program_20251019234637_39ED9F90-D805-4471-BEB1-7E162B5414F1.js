function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const t3 = Temporal.PlainTime;
const v5 = new t3();
v5.until(v5, F0);
