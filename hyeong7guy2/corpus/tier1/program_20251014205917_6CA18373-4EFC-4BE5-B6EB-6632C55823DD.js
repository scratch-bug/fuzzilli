function f1(a2, a3, a4) {
    function f6(a7) {
        return a4;
    }
    Object.defineProperty(a3, this, { set: f6 });
    return f1;
}
const v8 = {};
function f9(a10) {
    const t9 = Temporal.PlainYearMonth;
    new t9(-1024, -1024, a10);
    return a10;
}
v8[Symbol.toPrimitive] = f9;
v8.constructor = f1;
try { v8.constructor(v8, v8); } catch (e) {}
