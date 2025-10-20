const v1 = Temporal.PlainTime;
const v5 = v1.from({ hour: 22 }).toString;
try { v5.call(); } catch (e) {}
