const v0 = [];
function f1() {
    return f1;
}
function f2() {
    return f2;
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(v0, 1998508081, { get: f2, set: f1 });
}
new F3();
