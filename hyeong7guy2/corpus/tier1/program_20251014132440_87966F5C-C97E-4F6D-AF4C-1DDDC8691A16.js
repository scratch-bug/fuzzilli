function f2() {
    return f2;
}
function f3() {
    const v5 = Temporal.ZonedDateTime;
    const t5 = v5.from({ day: 25, month: 2, timeZone: "-16:00", year: 6 });
    t5.era ^= 25;
    function f11() {
        return { done: true };
    }
    return { next: f11 };
}
const v15 = Symbol.iterator;
f2.bind(null, ...{ [v15]: f3 });
