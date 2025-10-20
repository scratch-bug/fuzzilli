for (let i2 = 0, i3 = 10; i3; i3--) {
}
const v9 = [255,-426939026,-1778928433,50177,14];
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    function F16(a18, a19) {
        if (!new.target) { throw 'must be called with new'; }
        const t7 = Temporal.Duration;
        const v22 = new t7();
        v22.numberingSystem = v9;
        v22.toLocaleString(a18, v22);
    }
    try { new F16(); } catch (e) {}
}
new F10();
