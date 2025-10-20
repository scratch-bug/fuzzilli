function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4() {
    function f5() {
        const v7 = Temporal.ZonedDateTime;
        v7.from({ timeZone: "America/Eirunepe" });
        return F0;
    }
    return f5;
}
Object.defineProperty(F0, "constructor", { configurable: true, enumerable: true, get: f4 });
const v11 = F0.constructor;
try { v11(F0, f4); } catch (e) {}
