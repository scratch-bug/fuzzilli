function f2() {
    return Symbol;
}
function f3() {
    const v5 = Temporal.ZonedDateTime;
    const v10 = v5.from({ day: 25, month: 2, timeZone: "-16:00", year: 6 });
    const v11 = v10.since(v10);
    try { v11.round("-16:00"); } catch (e) {}
    function f13() {
        return { done: true };
    }
    return { next: f13 };
}
const v17 = Symbol.iterator;
f2.bind(null, ...{ [v17]: f3 });
