const v1 = ("-6").charAt();
class C3 extends WeakSet {
}
function f4() {
    function f5(a6) {
        return v1;
    }
    return f5;
}
function f7(a8) {
    return a8;
}
Object.defineProperty(C3, Symbol.toPrimitive, { configurable: true, get: f4, set: f7 });
try { JSON.rawJSON(C3); } catch (e) {}
