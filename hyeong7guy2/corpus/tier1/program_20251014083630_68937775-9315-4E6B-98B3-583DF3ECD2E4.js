class C0 {
}
const v1 = new C0();
v1.toJSON = C0;
const v3 = class {
    [64];
}
const v4 = new v3();
v4.toJSON = v1;
function f5() {
    return v3;
}
function f6() {
    function f7(a8) {
        function f9(a10, a11) {
            return a10;
        }
        const v14 = [v4];
        Worker(f9, { type: "function", arguments: v14 });
        return f7;
    }
    return f7;
}
function f17(a18) {
    return a18;
}
Object.defineProperty(f5, Symbol.iterator, { configurable: true, enumerable: true, get: f6, set: f17 });
try { new Uint16Array(f5); } catch (e) {}
