const v2 = Temporal.ZonedDateTime;
const v7 = v2.from({ day: 25, month: 2, timeZone: "-16:00", year: 6 });
v7.toPlainTime().equals(v7);
