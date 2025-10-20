function f2() {
    return f2;
}
function f3() {
    function f4(a5) {
        const v7 = Temporal.ZonedDateTime;
        const v8 = {};
        function f9() {
            try { Object[Object](); } catch (e) {}
            return Object;
        }
        Object.defineProperty(v8, "offset", { configurable: true, get: f9 });
        try { v7.from(v8); } catch (e) {}
        return "n";
    }
    return f4;
}
function f13(a14) {
    return a14;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f13 });
try { new Uint16Array(f2); } catch (e) {}
