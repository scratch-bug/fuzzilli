class C0 {
}
const v1 = [C0];
const v2 = [v1,v1,v1];
const v3 = [-1716311965,-9];
v3.fill();
function f5() {
    return C0;
}
function f6(a7) {
    return a7;
}
Object.defineProperty(v3, "b", { configurable: true, enumerable: true, get: f5, set: f6 });
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    const v13 = this.constructor;
    try { new v13(a10, v1); } catch (e) {}
    Object.defineProperty(a11, "b", { writable: true, configurable: true, enumerable: true, value: a10 });
}
new F8(v2, v3);
