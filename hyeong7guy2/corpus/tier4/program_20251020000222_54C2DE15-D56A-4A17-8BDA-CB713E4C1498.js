const v1 = Temporal.PlainYearMonth;
try {
    v1.compare({ month: 9, year: 0 });
} catch(e6) {
}
