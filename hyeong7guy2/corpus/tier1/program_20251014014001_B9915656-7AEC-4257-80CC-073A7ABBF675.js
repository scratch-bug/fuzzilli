function f1() {
    return f1;
}
function f2() {
    function f3(a4) {
        function f5(a6, a7) {
            return f1;
        }
        const v10 = { type: "function" };
        v10.arguments = v10;
        Worker(f5, v10);
        return f3;
    }
    return f3;
}
function f12(a13) {
    return f12;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f12 });
try { new Uint16Array(f1); } catch (e) {}
