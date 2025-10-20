function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
}
v3.localeMatcher = 2588;
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const t8 = Temporal.Duration;
    const v10 = new t8();
    v10.toLocaleString(a6, a7);
}
try { new F4(2588, v3); } catch (e) {}
