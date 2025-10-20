function f0(a1, a2) {
    return a2;
}
const v5 = Temporal.Instant;
v5.hours = f0;
const v6 = new v5(387551742n);
try { v6.add(v5); } catch (e) {}
