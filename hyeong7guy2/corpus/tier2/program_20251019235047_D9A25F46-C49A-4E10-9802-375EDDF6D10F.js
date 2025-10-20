function f2() {
    return Symbol;
}
function f3() {
    const v5 = Temporal.ZonedDateTime;
    const v10 = v5.from({ day: 25, month: 2, timeZone: "-16:00", year: 1024 });
    function f11() {
        return { done: true };
    }
    const v14 = { next: f11 };
    try {
        const v15 = {};
        function f16(a17, a18) {
            return v15;
        }
        v15.toString = f16;
        v15.calendarName = v15;
        v10.toString(v15);
    } catch(e20) {
    }
    return v14;
}
const v21 = Symbol.iterator;
f2.bind(null, ...{ [v21]: f3 });
