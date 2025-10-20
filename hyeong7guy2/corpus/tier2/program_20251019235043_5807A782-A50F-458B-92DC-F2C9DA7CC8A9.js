function f1() {
    return Symbol;
}
function f2() {
    const v4 = Temporal.ZonedDateTime;
    const v9 = v4.from({ day: 25, month: 2, timeZone: "-16:00", year: 25 });
    function f10() {
        return { done: true };
    }
    const v13 = { next: f10 };
    try {
        v9.toString({ calendarName: "never", offset: "never", smallestUnit: "day", timeZoneName: "critical" });
    } catch(e20) {
    }
    return v13;
}
const v21 = Symbol.iterator;
f1.bind(null, ...{ [v21]: f2 });
