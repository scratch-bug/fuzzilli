for (let i2 = 0, i3 = 10;
    i3;
    (() => {
        function f6() {
            const v8 = Temporal.ZonedDateTime;
            v8.from({ day: 25, month: 2, timeZone: "-16:00", year: i2 }).inLeapYear;
            return "-16:00";
        }
        f6.call();
        i3--;
    })()) {
}
