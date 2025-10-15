const v0 = [];
const v1 = [-1716311965,-9];
function f2() {
    return v1;
}
function f3(a4) {
    return a4;
}
Object.defineProperty(v1, "b", { configurable: true, enumerable: true, get: f2, set: f3 });
function F5(a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(a8, "b", { value: a7 });
}
new F5(v0, v1);
