const v1 = new WeakMap();
class C2 {
}
Object.defineProperty(C2, "toString", { writable: true, configurable: true, value: v1 });
function f3(a4, a5, a6) {
    delete a5[C2];
    return a6;
}
try { f3(C2, C2); } catch (e) {}
