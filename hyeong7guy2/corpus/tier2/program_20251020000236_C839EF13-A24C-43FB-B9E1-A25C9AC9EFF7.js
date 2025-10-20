class C2 extends WeakSet {
}
function f3() {
    function f4(a5) {
        return "function";
    }
    return f4;
}
function f6(a7) {
    return "function";
}
Object.defineProperty(C2, Symbol.toPrimitive, { configurable: true, get: f3, set: f6 });
try { JSON.rawJSON(C2); } catch (e) {}
