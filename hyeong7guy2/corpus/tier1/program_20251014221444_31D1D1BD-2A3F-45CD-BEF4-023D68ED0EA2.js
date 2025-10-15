const v2 = class {
}
function f3() {
    return add;
}
function f4(a5) {
    return add;
}
Object.defineProperty(v2, "toJSON", { get: f3, set: f4 });
function f6() {
    return f6;
}
function f7() {
    function f8(a9) {
        function f10(a11, a12) {
            return f8;
        }
        const v15 = [v2];
        Worker(f10, { type: "function", arguments: v15 });
        return a9;
    }
    return f8;
}
function f18(a19) {
    return a19;
}
Object.defineProperty(f6, Symbol.iterator, { configurable: true, enumerable: true, get: f7, set: f18 });
try { new Uint16Array(f6); } catch (e) {}
