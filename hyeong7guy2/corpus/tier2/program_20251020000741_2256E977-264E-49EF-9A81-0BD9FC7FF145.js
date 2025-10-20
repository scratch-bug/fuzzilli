function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F1 {
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        return 115;
    }
    function f10(a11) {
        return a11;
    }
    Object.defineProperty(a8, "monthsDisplay", { configurable: true, enumerable: true, get: f9, set: f10 });
    const t14 = Temporal.Duration;
    const v14 = new t14();
    v14.toLocaleString(a7, a8);
}
try { new F5(2588, v4); } catch (e) {}
