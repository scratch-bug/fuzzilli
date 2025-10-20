const v3 = Temporal.PlainDate;
const v4 = new v3(6, 6, 6);
try { v4.until(512, v3); } catch (e) {}
