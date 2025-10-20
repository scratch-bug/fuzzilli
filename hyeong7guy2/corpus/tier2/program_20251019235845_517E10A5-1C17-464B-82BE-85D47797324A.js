function f1() {
    return f1;
}
function f2() {
    const v4 = Temporal.ZonedDateTime;
    const v8 = { day: 25, month: 2, timeZone: "-16:00", year: 25 };
    function f9() {
        return 2;
    }
    function f10(a11) {
        return a11;
    }
    Object.defineProperty(v8, "millisecond", { get: f9, set: f10 });
    v4.from(v8);
    function f13() {
        return { done: true };
    }
    return { next: f13 };
}
const v17 = Symbol.iterator;
f1.bind(null, ...{ [v17]: f2 });
