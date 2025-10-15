class C1 {
    static {
        function f3(a4, a5) {
            const v7 = Temporal.ZonedDateTime;
            const v13 = {
                day: 18,
                microsecond: 783,
                minute: 40,
                month: 11,
                timeZone: "-00:00",
                year: 127,
            };
            v7.from(v13, {});
            return "-00:00";
        }
        this[Symbol.toPrimitive] = f3;
        super[this];
    }
}
