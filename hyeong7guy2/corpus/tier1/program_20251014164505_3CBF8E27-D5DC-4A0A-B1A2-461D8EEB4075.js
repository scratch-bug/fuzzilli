function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4() {
    function f5() {
        const v7 = Temporal.ZonedDateTime;
        const v8 = {};
        v8.calendar = v8;
        v7.from(v8);
        return v8;
    }
    return f5;
}
Object.defineProperty(F0, "constructor", { configurable: true, enumerable: true, get: f4 });
const v10 = F0.constructor;
try { v10(); } catch (e) {}
