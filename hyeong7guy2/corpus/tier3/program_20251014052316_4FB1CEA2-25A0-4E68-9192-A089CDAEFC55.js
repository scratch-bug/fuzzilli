const v2 = Temporal.PlainTime;
const v5 = v2.from({ hour: 22 });
try { v5.with(1); } catch (e) {}
