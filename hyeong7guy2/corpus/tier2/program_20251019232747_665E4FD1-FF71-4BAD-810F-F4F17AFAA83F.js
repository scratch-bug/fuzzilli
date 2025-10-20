function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            const v14 = Temporal.ZonedDateTime;
            v14.from({ day: 25, month: 129, timeZone: "-19:36", year: 6 }).toLocaleString(a7, F4);
            return a6;
        }
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
function f20() {
    return F0;
}
function f21(a22) {
    return F0;
}
Object.defineProperty(F4, "timeZone", { configurable: true, get: f20, set: f21 });
const v23 = new F4(f21, F4);
try { v23.toString(F0, F0); } catch (e) {}
