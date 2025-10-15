let v0 = 9;
v0--;
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = Temporal.PlainMonthDay;
    try { new v6(v0, 50774); } catch (e) {}
}
new F2();
