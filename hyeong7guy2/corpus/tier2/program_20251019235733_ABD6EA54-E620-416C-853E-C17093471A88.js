function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i5 = 0, i6 = 10; i6; i6--) {
}
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    const t7 = Temporal.Duration;
    new t7(a15);
}
const v19 = new F12();
const v20 = v19.constructor;
try { new v20(undefined, F0); } catch (e) {}
