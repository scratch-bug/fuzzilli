function f2() {
    return f2;
}
function f3() {
    const v5 = Temporal.ZonedDateTime;
    v5.from({ day: 25, month: 2, timeZone: "-16:00", year: 6 }).toInstant().toJSON();
    function f13() {
        return { done: true };
    }
    return { next: f13 };
}
const v17 = Symbol.iterator;
f2.bind(null, ...{ [v17]: f3 });
