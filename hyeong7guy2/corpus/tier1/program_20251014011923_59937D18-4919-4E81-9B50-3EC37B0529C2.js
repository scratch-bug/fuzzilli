function f1() {
    return f1;
}
function f2() {
    function f3(a4) {
        function f5(a6, a7) {
            return a6;
        }
        const v10 = [Int32Array];
        v10[1] = v10;
        Worker(f5, { type: "function", arguments: v10 });
        return Worker;
    }
    return f3;
}
function f13(a14) {
    return Int32Array;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f13 });
try { new Uint16Array(f1); } catch (e) {}
