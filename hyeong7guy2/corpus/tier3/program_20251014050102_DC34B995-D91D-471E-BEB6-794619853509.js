function f1() {
    return f1;
}
function f2() {
    const v4 = Temporal.PlainMonthDay;
    v4.from({ monthCode: "e" });
    return Temporal;
}
f1[Symbol.iterator] = f2;
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a13;
}
const v14 = new F10(Symbol, Int16Array);
const v15 = v14.b;
try { new v15(f1); } catch (e) {}
