function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.microseconds = "o";
}
const v4 = class extends F1 {
}
const v5 = new v4();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const t9 = Temporal.Duration;
    const v12 = new t9();
    v12.toLocaleString(a8, a9);
}
try { new F6(2588, v5); } catch (e) {}
