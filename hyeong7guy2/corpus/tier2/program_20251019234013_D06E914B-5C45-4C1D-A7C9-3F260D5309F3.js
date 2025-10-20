function f1() {
    return Symbol;
}
function f2() {
    const v4 = Temporal.ZonedDateTime;
    const v9 = v4.from({ day: 25, month: 2, timeZone: "-16:00", year: 25 });
    function f10() {
        return { done: true };
    }
    const v13 = { next: f10 };
    try {
        const v14 = {};
        v14.fractionalSecondDigits = v14;
        v9.toString(v14);
    } catch(e16) {
    }
    return v13;
}
const v17 = Symbol.iterator;
f1.bind(null, ...{ [v17]: f2 });
