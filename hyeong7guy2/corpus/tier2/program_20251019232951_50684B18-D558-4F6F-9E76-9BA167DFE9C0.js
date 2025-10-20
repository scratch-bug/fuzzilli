function f2() {
    return f2;
}
function f3() {
    const v5 = Temporal.ZonedDateTime;
    const v10 = v5.from({ day: 1073741824, month: 2, timeZone: "-16:00", year: -4096 });
    try { v10.round(1073741824); } catch (e) {}
    function f12() {
        return { done: true };
    }
    return { next: f12 };
}
const v16 = Symbol.iterator;
f2.bind(null, ...{ [v16]: f3 });
