const v0 = /(h)/ugd;
function f1() {
    return v0;
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
function f6() {
    function f7() {
        const v9 = Temporal.ZonedDateTime;
        const v11 = { calendar: "hebrew" };
        v11.era = f7;
        v9.from(v11);
        return f7;
    }
    return f7;
}
Object.defineProperty(F2, "constructor", { configurable: true, enumerable: true, get: f6 });
const v13 = F2.constructor;
v13[Symbol.toPrimitive] = f1;
try { v13(); } catch (e) {}
