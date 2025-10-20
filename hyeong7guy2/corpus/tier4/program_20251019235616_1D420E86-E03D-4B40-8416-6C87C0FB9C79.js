const v1 = Temporal.PlainMonthDay;
const v4 = { day: 25, month: 7 };
v1.from(v4).with(v4, v4);
