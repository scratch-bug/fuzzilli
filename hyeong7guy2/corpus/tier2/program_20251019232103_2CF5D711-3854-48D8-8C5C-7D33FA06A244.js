function f2() {
    return -7919;
}
function f3() {
    const v5 = Temporal.ZonedDateTime;
    v5.from({ day: 25, month: 2, timeZone: "+18:00", year: -7919 }).toLocaleString();
    function f12() {
        return { done: true };
    }
    return { next: f12 };
}
const v16 = Symbol.iterator;
f2.bind(null, ...{ [v16]: f3 });
