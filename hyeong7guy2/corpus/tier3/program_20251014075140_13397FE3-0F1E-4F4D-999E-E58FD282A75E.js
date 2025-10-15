function f0() {
    return f0;
}
function f1() {
    const v3 = Temporal.PlainDate;
    return v3.from({ month: 0 });
}
f0[Symbol.iterator] = f1;
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = Int16Array;
}
const v14 = new F10();
const v15 = v14.b;
try { new v15(f0); } catch (e) {}
