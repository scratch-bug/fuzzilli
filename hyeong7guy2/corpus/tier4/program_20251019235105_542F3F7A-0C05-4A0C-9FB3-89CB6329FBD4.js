function F3() {
    if (!new.target) { throw 'must be called with new'; }
}
F3 |= "d";
const v9 = Temporal.PlainDateTime;
try { new v9(7, F3, 10, 5, 6, 2957, Temporal); } catch (e) {}
