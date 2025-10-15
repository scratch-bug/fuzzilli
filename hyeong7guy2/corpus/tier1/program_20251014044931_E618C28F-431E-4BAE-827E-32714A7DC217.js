const v0 = class {
}
function f1() {
    return f1;
}
function f2(a3, a4, a5, a6) {
    f1 ^= f1;
    Object.defineProperty(a4, "c", { writable: true, get: f1, set: f1 });
    return a5;
}
try { f2(v0, v0); } catch (e) {}
