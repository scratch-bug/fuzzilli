const v2 = Symbol.asyncDispose.description;
function f4() {
    Temporal.PlainYearMonth.from(v2);
    return Symbol;
}
Uint16Array.constructor = f4;
const v8 = Uint16Array.constructor;
try { v8(); } catch (e) {}
