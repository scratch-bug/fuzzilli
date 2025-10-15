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
    const v9 = this.constructor;
    try { new v9(F4, v9, this); } catch (e) {}
    Object.entries(v0);
}
new F4(v0, f2, v0);
