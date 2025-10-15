function f2() {
    return f2;
}
function f3() {
    const v5 = Temporal.ZonedDateTime;
    let v6 = 2;
    v6--;
    v5.from({ day: 25, month: v6, timeZone: "+11:00", year: 6 }).toLocaleString();
    function f13() {
        return { done: true };
    }
    return { next: f13 };
}
const v17 = Symbol.iterator;
f2.bind(null, ...{ [v17]: f3 });
