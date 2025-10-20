function f1() {
    return Symbol;
}
function f2() {
    const v4 = Temporal.ZonedDateTime;
    const v9 = v4.from({ day: 25, month: 2, timeZone: "-16:00", year: 25 });
    const v11 = JSON.parse;
    try { v11(v9); } catch (e) {}
    function f13() {
        return { done: true };
    }
    return { next: f13 };
}
const v17 = Symbol.iterator;
f1.bind(null, ...{ [v17]: f2 });
