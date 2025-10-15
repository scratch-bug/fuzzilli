function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function f5() {
    function f6() {
        const v8 = Temporal.ZonedDateTime;
        const v10 = { calendar: "hebrew" };
        v10.era = -5072733;
        v8.compare(v10);
        return f5;
    }
    return f6;
}
Object.defineProperty(F1, "constructor", { configurable: true, enumerable: true, get: f5 });
const v12 = F1.constructor;
try { v12(); } catch (e) {}
