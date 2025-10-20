function f2() {
    return "n";
}
function f3() {
    function f4(a5) {
        const v7 = Temporal.ZonedDateTime;
        const v8 = {};
        function f9() {
        }
        Object.defineProperty(v8, "nanosecond", { get: f9 });
        function f10() {
            Object.n = f4;
            return Object["n"]();
        }
        Object.defineProperty(v8, "offset", { configurable: true, get: f10 });
        v7.from(v8);
        return f2;
    }
    return f4;
}
function f14(a15) {
    return f2;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f14 });
try { new Uint16Array(f2); } catch (e) {}
