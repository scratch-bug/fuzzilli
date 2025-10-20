const v1 = Temporal.PlainTime;
const v6 = { hour: 22, millisecond: 515, minute: 28, second: 0 };
v1.from(v6, { overflow: "reject" });
