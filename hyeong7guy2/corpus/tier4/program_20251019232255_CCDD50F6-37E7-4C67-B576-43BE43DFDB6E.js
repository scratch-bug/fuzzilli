const v2 = Temporal.PlainDateTime;
const v3 = new v2(4, 4, 4);
const v4 = v3.since;
const v5 = v4.bind(4);
try { v5(v2, Temporal, v4, Temporal); } catch (e) {}
