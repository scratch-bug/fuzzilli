function f1() {
    return f1;
}
function f2() {
    function f3(a4) {
        function f5(a6, a7) {
            return a7;
        }
        const v10 = [Worker,Worker,Worker,Worker];
        v10.unshift(6n);
        Worker(f5, { type: "function", arguments: v10 });
        return f3;
    }
    return f3;
}
function f14(a15) {
    return f14;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f14 });
try { new Uint16Array(f1); } catch (e) {}
