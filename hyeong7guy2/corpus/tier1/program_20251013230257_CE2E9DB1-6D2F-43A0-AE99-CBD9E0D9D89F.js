class C1 {
}
function f2() {
    return WeakMap;
}
Object.defineProperty(C1, "toString", { writable: true, configurable: true, value: f2 });
function f3(a4, a5, a6) {
    delete a6[C1];
    return C1;
}
try { f3(C1, C1, WeakMap); } catch (e) {}
