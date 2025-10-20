const v2 = Temporal.ZonedDateTime;
const v7 = v2.from({ day: 2, month: 12, timeZone: "-21:00", year: 5 });
v7.toString({ smallestUnit: "seconds" });
