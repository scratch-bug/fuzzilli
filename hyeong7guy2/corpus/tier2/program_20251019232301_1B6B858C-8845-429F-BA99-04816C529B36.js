function f1() {
    return Symbol;
}
function f2() {
    const v4 = Temporal.ZonedDateTime;
    v4.from({ day: 25, month: 2, timeZone: "-16:00", year: 25 }).month;
    function f11() {
        return { done: true };
    }
    return { next: f11 };
}
const v15 = Symbol.iterator;
f1.bind(null, ...{ [v15]: f2 });
