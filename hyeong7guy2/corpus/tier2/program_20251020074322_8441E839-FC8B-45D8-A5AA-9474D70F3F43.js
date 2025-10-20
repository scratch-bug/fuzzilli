function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
class C4 extends F0 {
}
Set.roundingMode = C4;
const t6 = Temporal.PlainDateTime;
const v9 = new t6(4, 4, 4);
try { v9.toString(Set); } catch (e) {}
