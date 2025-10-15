const v1 = Temporal.PlainTime;
const v4 = v1.from({ hour: 22 });
try { v4.with(v4); } catch (e) {}
