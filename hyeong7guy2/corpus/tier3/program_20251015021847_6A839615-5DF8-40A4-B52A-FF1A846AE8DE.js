function f0() {
    return f0;
}
const v2 = Temporal.PlainMonthDay;
const v6 = v2.from({ day: 25, month: 7 });
try { v6.with(f0); } catch (e) {}
