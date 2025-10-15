const v2 = Object(108);
function f3() {
    return Object;
}
function f4(a5) {
    return f4;
}
Object.defineProperty(v2, Symbol.toPrimitive, { configurable: true, get: f3, set: f4 });
try { v2.toPrecision(v2); } catch (e) {}
