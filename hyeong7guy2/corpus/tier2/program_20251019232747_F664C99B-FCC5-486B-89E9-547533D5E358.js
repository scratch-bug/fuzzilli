function f1() {
    return f1;
}
function f2() {
    const v4 = Temporal.ZonedDateTime;
    const v9 = v4.from({ day: 25, month: 2, timeZone: "-16:00", year: 25 });
    function f10() {
        return { done: true };
    }
    const v13 = { next: f10 };
    try { ("never").padEnd(v9); } catch (e) {}
    return v13;
}
const v16 = Symbol.iterator;
f1.bind(null, ...{ [v16]: f2 });
