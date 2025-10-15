let v0 = 9;
v0--;
const v2 = v0--;
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    const t5 = Temporal.PlainYearMonth;
    new t5(50774, v2);
    const v9 = Temporal.PlainMonthDay;
    try { new v9(v0, 50774); } catch (e) {}
}
new F3();
