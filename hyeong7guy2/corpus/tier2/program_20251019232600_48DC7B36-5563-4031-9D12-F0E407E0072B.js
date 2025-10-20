function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function F5(a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = Date;
}
class C10 extends F5 {
    valueOf(a12, a13) {
        const v15 = Temporal.PlainMonthDay;
        v15.from({ calendar: "toBase64" });
    }
}
const v19 = new C10();
const v20 = v19.e;
try { new v20(F0, F0, v19); } catch (e) {}
