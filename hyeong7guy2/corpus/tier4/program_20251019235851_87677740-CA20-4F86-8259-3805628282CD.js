const v2 = Temporal.PlainYearMonth;
const v4 = { month: 5, year: 1933 };
v2.from(v4, { overflow: "reject" });
