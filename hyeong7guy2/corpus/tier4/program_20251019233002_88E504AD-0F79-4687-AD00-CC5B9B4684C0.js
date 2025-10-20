const v2 = Temporal.ZonedDateTime;
const v7 = v2.from({ day: 2, month: 12, timeZone: "-21:00", year: 5 });
const v8 = {};
v8.fractionalSecondDigits = 2;
v7.toString(v8);
