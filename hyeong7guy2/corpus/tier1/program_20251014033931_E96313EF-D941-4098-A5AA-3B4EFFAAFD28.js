const v1 = [353197,64,-3,-1033328605,15,-1997070859];
const v2 = class {
}
function f3() {
    return v1;
}
function f4(a5, a6, a7, a8) {
    Object.defineProperty(a6, "c", { writable: true, get: v1, set: f3 });
    return a7;
}
try { f4(v2, Uint8Array); } catch (e) {}
