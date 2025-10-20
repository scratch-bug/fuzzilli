const v2 = Temporal.PlainYearMonth;
const v5 = v2.from({ monthCode: "M07", year: 700 });
try {
    v5.toLocaleString("M07", Error);
} catch(e8) {
}
