const v2 = Temporal.PlainDate;
const v5 = { day: 23, month: 5, year: 589 };
v2.from(v5, { overflow: "reject" });
