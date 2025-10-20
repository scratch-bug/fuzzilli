const v2 = Temporal.PlainMonthDay;
const v5 = v2.from({ day: 7, month: 1000 });
function f6() {
    return 7;
}
function f7(a8) {
    return a8;
}
Object.defineProperty(v5, "year", { configurable: true, enumerable: true, get: f6, set: f7 });
v5.toPlainDate(v5).day;
