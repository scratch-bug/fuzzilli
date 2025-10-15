function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function f7() {
    return 6;
}
function f8() {
    const v10 = Temporal.ZonedDateTime;
    const v15 = v10.from({ day: 25, month: 2, timeZone: "-16:00", year: 6 });
    v15.since(v15, F0);
    function f17() {
        return { done: true };
    }
    return { next: f17 };
}
const v21 = Symbol.iterator;
f7.bind(null, ...{ [v21]: f8 });
