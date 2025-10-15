const v2 = Temporal.PlainYearMonth;
const v4 = { monthCode: "M07", year: 4 };
v2.from(v4, { overflow: "reject" });
