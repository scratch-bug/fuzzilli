function f0() {
    return f0;
}
function f1() {
    function f2(a3) {
        function f4(a5, a6) {
            return a5;
        }
        const v9 = ["function"];
        v9.pop();
        v9.toJSON = f2;
        v9[1] = v9;
        Worker(f4, { type: "function", arguments: v9 });
        return f0;
    }
    return f2;
}
function f13(a14) {
    return f13;
}
Object.defineProperty(f0, Symbol.iterator, { configurable: true, enumerable: true, get: f1, set: f13 });
try { new Uint16Array(f0); } catch (e) {}
