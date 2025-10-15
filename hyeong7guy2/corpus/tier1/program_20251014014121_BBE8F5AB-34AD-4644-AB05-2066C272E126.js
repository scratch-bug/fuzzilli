function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this.constructor;
    try { new v6("n", F1, F1); } catch (e) {}
    try { a3.constructor(); } catch (e) {}
    try { a5(); } catch (e) {}
}
const v10 = new F1();
class C12 extends Set {
}
const v14 = Temporal.ZonedDateTime;
try { new v14(C12, v10); } catch (e) {}
