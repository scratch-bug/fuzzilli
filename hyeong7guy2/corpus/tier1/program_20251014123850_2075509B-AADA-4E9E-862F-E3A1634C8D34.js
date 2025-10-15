function f2() {
    return 6;
}
function f3() {
    const v5 = Temporal.ZonedDateTime;
    v5.from({ day: 25, month: 2, timeZone: "-16:00", year: 6 }).toJSON();
    function f12() {
        return { done: true };
    }
    return { next: f12 };
}
const v16 = Symbol.iterator;
f2.bind(null, ...{ [v16]: f3 });
