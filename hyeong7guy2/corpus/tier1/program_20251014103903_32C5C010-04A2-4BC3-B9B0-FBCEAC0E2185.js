function f2() {
    return "n";
}
function f3() {
    Temporal.Duration.from("n");
    return f3;
}
function f7(a8) {
    return f7;
}
Object.defineProperty(f2, Symbol.iterator, { configurable: true, enumerable: true, get: f3, set: f7 });
try { new Uint16Array(f2); } catch (e) {}
