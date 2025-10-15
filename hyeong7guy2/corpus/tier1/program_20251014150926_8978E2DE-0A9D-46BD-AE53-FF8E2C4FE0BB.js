Temporal.timeZone = Uint32Array;
const t1 = Temporal.PlainDate;
const v4 = new t1(6, 6, 6);
try { v4.toZonedDateTime(Temporal); } catch (e) {}
