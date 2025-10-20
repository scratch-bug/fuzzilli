const v2 = Temporal.PlainMonthDay;
const v4 = { day: 7, month: 1000 };
const v5 = v2.from(v4);
function f6() {
    return 7;
}
function f7(a8) {
    return v4;
}
Object.defineProperty(v5, "year", { configurable: true, enumerable: true, get: f6, set: f7 });
v5.toPlainDate(v5).toString(v2);
