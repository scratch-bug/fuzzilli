try {
    const t1 = Temporal.PlainMonthDay;
    new t1(-9223372036854775808, -9223372036854775808, 6);
} catch(e5) {
}
