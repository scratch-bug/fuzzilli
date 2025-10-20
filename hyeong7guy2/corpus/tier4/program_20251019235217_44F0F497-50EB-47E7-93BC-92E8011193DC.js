const v2 = Temporal.ZonedDateTime;
v2.roundingMode = v2;
const v8 = {
    calendar: "islamic-civil",
    day: 22,
    era: "bh",
    eraYear: 1024,
    monthCode: "M03",
    timeZone: "America/La_Paz",
};
const v9 = v2.from(v8);
try { v9.round(v2); } catch (e) {}
