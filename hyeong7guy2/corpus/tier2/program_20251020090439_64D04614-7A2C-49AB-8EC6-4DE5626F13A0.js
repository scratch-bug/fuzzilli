function f1() {
    return f1;
}
function f2() {
    const v4 = Temporal.ZonedDateTime;
    const v9 = v4.from({ day: 25, month: 2, timeZone: "-16:00", year: 25 });
    try { v9.add(); } catch (e) {}
    function f11() {
        return { done: true };
    }
    return { next: f11 };
}
const v15 = Symbol.iterator;
f1.bind(null, ...{ [v15]: f2 });
