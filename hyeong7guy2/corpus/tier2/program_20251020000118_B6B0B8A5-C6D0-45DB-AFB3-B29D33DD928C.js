function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = Temporal.ZonedDateTime;
Object.defineProperty(v8, "roundingIncrement", { writable: true, configurable: true, value: F0 });
const v14 = {
    calendar: "islamic-civil",
    day: 22,
    era: "bh",
    eraYear: 1024,
    monthCode: "M03",
    timeZone: "America/La_Paz",
};
const v15 = v8.from(v14);
try { v15.round(v8); } catch (e) {}
