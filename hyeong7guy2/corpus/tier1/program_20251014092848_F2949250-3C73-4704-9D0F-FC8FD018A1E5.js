function f2() {
    return f2;
}
function f3() {
    const v5 = Temporal.ZonedDateTime;
    const v10 = {
        day: 25,
        millisecond: 177,
        month: 2,
        timeZone: "-16:00",
        year: 6,
    };
    v5.from(v10);
    function f12() {
        return { done: true };
    }
    return { next: f12 };
}
const v16 = Symbol.iterator;
f2.bind(null, ...{ [v16]: f3 });
