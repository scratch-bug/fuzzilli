class C2 extends WeakSet {
}
function f3() {
    function f4(a5) {
        return a5.fontsize(a5, f4)[3];
    }
    return f4;
}
function f8(a9) {
    return a9;
}
Object.defineProperty(C2, Symbol.toPrimitive, { configurable: true, get: f3, set: f8 });
try { JSON.rawJSON(C2); } catch (e) {}
