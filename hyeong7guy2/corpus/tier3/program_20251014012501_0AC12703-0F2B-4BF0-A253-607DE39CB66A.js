for (let v1 = 0; v1 < 250; v1++) {
}
const v3 = Temporal.ZonedDateTime;
const v12 = {
    calendar: "islamic-civil",
    day: 22,
    era: "bh",
    eraYear: 1024,
    hour: 19,
    monthCode: "M03",
    nanosecond: 18,
    second: 1,
    timeZone: "America/La_Paz",
};
v3.from(v12, { disambiguation: "later", offset: "ignore", overflow: "constrain" });
