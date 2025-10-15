function f1() {
    return f1;
}
function f2() {
    function f3(a4) {
        function f5(a6, a7) {
            return f1;
        }
        const v10 = ["function","function","function","function"];
        v10.toJSON = Worker;
        v10[1] = v10;
        Worker(f5, { type: "function", arguments: v10 });
        return "function";
    }
    return f3;
}
function f13(a14) {
    return Symbol;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f13 });
try { new Uint16Array(f1); } catch (e) {}
