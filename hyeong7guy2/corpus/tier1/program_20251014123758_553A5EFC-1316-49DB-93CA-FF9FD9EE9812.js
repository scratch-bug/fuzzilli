function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function f5() {
    function f6() {
        const v8 = Temporal.ZonedDateTime;
        const v11 = { calendar: "hebrew", eraYear: 2147483648, timeZone: "America/Eirunepe" };
        v8.from(v11);
        return v11;
    }
    return f6;
}
Object.defineProperty(F1, "constructor", { configurable: true, enumerable: true, get: f5 });
const v13 = F1.constructor;
try { v13(v13); } catch (e) {}
