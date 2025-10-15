const v2 = Temporal.Instant;
v2.days = Temporal;
const v3 = new v2(387551742n);
try { v3.add(v2); } catch (e) {}
