const v1 = Temporal.PlainYearMonth;
try {
    new v1(-3, -3, "ethiopic");
} catch(e5) {
}
