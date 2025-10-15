const v0 = class {
}
function f1(a2, a3) {
    Object.defineProperty(Object, "prototype", { enumerable: true, get: Object, set: Object });
    return v0;
}
v0.constructor = f1;
try { v0.constructor(); } catch (e) {}
