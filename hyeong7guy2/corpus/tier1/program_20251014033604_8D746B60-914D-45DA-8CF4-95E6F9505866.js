const v0 = [12,-11,-9223372036854775808,-268435456];
function f1() {
    return v0;
}
function f2() {
    function f3(a4) {
        function f6(a7, a8) {
            Temporal.PlainYearMonth.from(v0);
            return f6;
        }
        Object.defineProperty(Worker, Symbol.toPrimitive, { configurable: true, enumerable: true, value: f6 });
        const v18 = {
            [Worker](a15, a16, a17) {
            },
        };
        return Symbol;
    }
    return f3;
}
function f19(a20) {
    return f1;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f19 });
try { new Uint16Array(f1); } catch (e) {}
