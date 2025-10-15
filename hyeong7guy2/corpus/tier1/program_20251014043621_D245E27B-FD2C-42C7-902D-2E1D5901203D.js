function f0() {
    return f0;
}
function f1() {
    function f2(a3) {
        function f4(a5, a6) {
            return a3;
        }
        const v9 = [];
        Object.defineProperty(v9, 1, { writable: true, value: a3 });
        v9[1] = v9;
        return Worker(f4, { type: "function", arguments: v9 });
    }
    return f2;
}
function f12(a13) {
    return a13;
}
Object.defineProperty(f0, Symbol.iterator, { configurable: true, enumerable: true, get: f1, set: f12 });
try { new Uint16Array(f0); } catch (e) {}
