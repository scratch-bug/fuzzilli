const v2 = Temporal.ZonedDateTime;
let v3 = 2;
v3--;
v2.from({ day: 25, month: v3, timeZone: "+11:00", year: 1000 }).toLocaleString();
