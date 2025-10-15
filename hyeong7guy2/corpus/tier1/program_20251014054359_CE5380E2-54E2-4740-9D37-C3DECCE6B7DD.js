function f1() {
    return 512;
}
function f2() {
    function f3(a4) {
        function f5(a6, a7) {
            return f3;
        }
        const v10 = [];
        v10[0] = 512;
        Object.defineProperty(v10, 1, { writable: true, value: a4 });
        v10[1] = v10;
        Worker(f5, { type: "function", arguments: v10 });
        return 512;
    }
    return f3;
}
function f13(a14) {
    return f13;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f13 });
try { new Uint16Array(f1); } catch (e) {}
