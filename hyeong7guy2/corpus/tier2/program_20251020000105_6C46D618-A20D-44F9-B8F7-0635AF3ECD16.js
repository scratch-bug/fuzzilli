function f2() {
    return Symbol;
}
function f3() {
    const v5 = Temporal.ZonedDateTime;
    const v10 = v5.from({ day: 25, month: 2, timeZone: "-16:00", year: 6 });
    v10.toLocaleString();
    v10.toJSON().toWellFormed();
    function f14() {
        return { done: true };
    }
    return { next: f14 };
}
const v18 = Symbol.iterator;
f2.bind(null, ...{ [v18]: f3 });
