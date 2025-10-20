const v2 = Temporal.PlainYearMonth;
const v5 = v2.from({ monthCode: "M07", year: 4 });
with (Temporal) {
    try { ZonedDateTime.from(v5); } catch (e) {}
}
