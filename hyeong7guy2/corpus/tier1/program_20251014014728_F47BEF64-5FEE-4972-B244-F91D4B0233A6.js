Int32Array.toJSON = 3;
function f2() {
    return 3;
}
function f3() {
    function f4(a5) {
        function f6(a7, a8) {
            return a5;
        }
        const v11 = [Int32Array];
        v11[1] = v11;
        Worker(f6, { type: "function", arguments: v11 });
        return a5;
    }
    return f4;
}
function f14(a15) {
    return a15;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f14 });
try { new Uint16Array(f2); } catch (e) {}
