function f1() {
    return f1;
}
function f2() {
    function f3(a4) {
        function f6(a7, a8) {
            Temporal.PlainYearMonth.compare(64);
            return f3;
        }
        Object.defineProperty(Worker, Symbol.toPrimitive, { configurable: true, enumerable: true, value: f6 });
        const v18 = {
            [Worker](a15, a16, a17) {
            },
        };
        return v18;
    }
    return f3;
}
function f19(a20) {
    return a20;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f19 });
try { new Uint16Array(f1); } catch (e) {}
