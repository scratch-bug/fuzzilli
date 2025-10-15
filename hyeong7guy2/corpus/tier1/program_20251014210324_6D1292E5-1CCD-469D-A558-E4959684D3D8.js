function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4() {
    function f5() {
        const v7 = Temporal.ZonedDateTime;
        const v10 = { calendar: "hebrew", timeZone: "America/Eirunepe" };
        v10.era = f5;
        v7.from(v10);
        return v10;
    }
    return f5;
}
Object.defineProperty(F0, "constructor", { configurable: true, enumerable: true, get: f4 });
const v12 = F0.constructor;
try { v12(); } catch (e) {}
