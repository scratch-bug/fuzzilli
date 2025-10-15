function f0() {
    return f0;
}
function f1() {
    const v3 = Temporal.PlainMonthDay;
    return v3.from({ day: 15, month: 5, monthCode: "M12" });
}
f0[Symbol.iterator] = f1;
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = Int16Array;
}
const v16 = new F12(Symbol, Int16Array);
const v17 = v16.b;
try { new v17(f0); } catch (e) {}
