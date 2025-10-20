const v3 = Temporal.ZonedDateTime;
const v8 = {
    calendar: "islamic-civil",
    day: 16,
    era: "bh",
    eraYear: 1024,
    monthCode: "M03",
    timeZone: "America/La_Paz",
};
v3.from(v8).monthsInYear;
