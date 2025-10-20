function F3() {
    if (!new.target) { throw 'must be called with new'; }
}
F3 |= 5;
const v9 = Temporal.PlainDateTime;
try { new v9(7, F3, 10, 5, 6, 2957, 6, Array); } catch (e) {}
