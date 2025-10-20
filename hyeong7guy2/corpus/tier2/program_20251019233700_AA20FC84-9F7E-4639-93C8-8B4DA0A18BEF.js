function f4() {
    return Uint8Array;
}
function f5() {
    const v7 = Temporal.ZonedDateTime;
    const v13 = v7.from({ day: 25, month: 2, timeZone: "-16:00", year: 6 }).timeZoneId;
    function f14() {
        Reflect.construct(v7, [-2n,v13], Uint8Array);
        return { done: true };
    }
    return { next: f14 };
}
const v21 = Symbol.iterator;
f4.bind(null, ...{ [v21]: f5 });
