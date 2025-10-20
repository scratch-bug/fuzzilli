const v2 = Temporal.ZonedDateTime;
const v8 = {
    calendar: "islamic-civil",
    day: 22,
    era: "bh",
    eraYear: 1024,
    monthCode: "M03",
    timeZone: "America/La_Paz",
};
const v9 = v2.from(v8);
v9.withTimeZone(v9);
