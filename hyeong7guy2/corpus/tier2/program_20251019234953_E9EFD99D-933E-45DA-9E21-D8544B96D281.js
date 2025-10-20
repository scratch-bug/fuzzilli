function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = [-1716311965,-9];
function f3() {
    return F0;
}
function f4(a5) {
    return f3;
}
Object.defineProperty(v2, "b", { configurable: true, enumerable: true, get: f3, set: f4 });
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(a9, "b", { writable: true, configurable: true, enumerable: true, value: a8 });
}
new F6(F0, v2);
