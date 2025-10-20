const v2 = Temporal.ZonedDateTime;
const v8 = {
    calendar: "islamic-civil",
    day: 22,
    era: "bh",
    eraYear: 1024,
    monthCode: "M03",
    timeZone: "America/La_Paz",
};
const v9 = v2.from(v8);
function f11() {
    return v2;
}
function f12() {
    v9.year /= 22;
    function f13() {
        return { done: true };
    }
    return { next: f13 };
}
const v17 = Symbol.iterator;
f11.bind(null, ...{ [v17]: f12 });
