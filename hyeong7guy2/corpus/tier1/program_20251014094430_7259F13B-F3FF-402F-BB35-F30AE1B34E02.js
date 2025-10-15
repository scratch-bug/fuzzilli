function f1() {
    return Symbol;
}
function f2() {
    function f3(a4) {
        function f6(a7, a8) {
            Temporal.calendar = Worker;
            Temporal.PlainYearMonth.compare(Temporal);
            return a4;
        }
        Object.defineProperty(Worker, Symbol.toPrimitive, { configurable: true, enumerable: true, value: f6 });
        const v17 = {
            [Worker](a14, a15, a16) {
            },
        };
        return f1;
    }
    return f3;
}
function f18(a19) {
    return a19;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f18 });
try { new Uint16Array(f1); } catch (e) {}
