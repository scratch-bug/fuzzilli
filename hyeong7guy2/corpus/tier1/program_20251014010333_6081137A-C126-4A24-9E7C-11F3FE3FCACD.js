const v3 = Object(108);
function f4() {
    return Symbol;
}
function f5(a6) {
    return a6;
}
Object.defineProperty(v3, "valueOf", { configurable: true, enumerable: true, get: f4, set: f5 });
try { v3.toExponential(v3); } catch (e) {}
