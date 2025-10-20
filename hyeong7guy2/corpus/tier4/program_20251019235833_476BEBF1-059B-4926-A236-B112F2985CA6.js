for (let i3 = 0, i4 = 10;
    i4;
    (() => {
        function f7() {
            const v9 = Temporal.ZonedDateTime;
            const v14 = { day: 17, month: 7, timeZone: "Indian/Mahe", year: 25 };
            v9.compare(v14, { day: 15, month: 11, timeZone: "Pacific/Guadalcanal", year: 5 });
            return 5;
        }
        f7.call();
        i4--;
    })()) {
}
