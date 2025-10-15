function f2() {
    return f2;
}
function f3() {
    function f4(a5) {
        const v7 = Temporal.PlainDateTime;
        v7.from({ monthCode: "M09L", year: 0 });
        return "M09L";
    }
    return f4;
}
function f11(a12) {
    return a12;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f11 });
try { new Uint16Array(f2); } catch (e) {}
