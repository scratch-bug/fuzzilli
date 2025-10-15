const v1 = Temporal.PlainTime;
const v3 = { nanosecond: 626 };
v1.from(v3, { overflow: "reject" });
