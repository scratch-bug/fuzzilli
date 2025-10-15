const v0 = class {
}
function f1() {
    function f2(a3) {
        return f2;
    }
    return f2;
}
function f4(a5) {
    return a5;
}
Object.defineProperty(v0, Symbol.match, { get: f1, set: f4 });
function f8() {
    return f4;
}
const v9 = f8.toString();
try { v9.matchAll(v0); } catch (e) {}
