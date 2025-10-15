function f0() {
    return f0;
}
function f1() {
    function f2(a3) {
        function f4(a5, a6) {
            return a3;
        }
        Worker(f4, { type: "function" });
        return f2;
    }
    return f2;
}
function f11(a12) {
    return a12;
}
Object.defineProperty(f0, Symbol.iterator, { configurable: true, enumerable: true, get: f1, set: f11 });
try { new Uint16Array(f0); } catch (e) {}
