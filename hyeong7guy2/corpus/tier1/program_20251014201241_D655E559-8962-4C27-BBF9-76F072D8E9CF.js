const v0 = [];
function f1() {
    return f1;
}
function f2(a3) {
    return a3;
}
Object.defineProperty(v0, 3, { enumerable: true, get: f1, set: f2 });
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    Object.entries(v0);
}
new F4();
