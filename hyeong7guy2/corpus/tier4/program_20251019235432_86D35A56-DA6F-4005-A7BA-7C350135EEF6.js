class C1 {
}
C1.c = "4096";
const v4 = new Proxy(C1, {});
const v5 = v4.c;
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
}
F6.millisecond = v5;
const v11 = Temporal.ZonedDateTime;
v11.from({ day: 25, month: 2, timeZone: "-16:00", year: 6 }).with(F6);
