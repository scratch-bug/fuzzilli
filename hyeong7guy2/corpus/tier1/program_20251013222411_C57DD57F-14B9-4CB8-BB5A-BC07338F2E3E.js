function f1() {
    return Symbol;
}
f1[Symbol.toPrimitive] = Symbol;
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
function f7() {
    return Symbol;
}
function f8(a9) {
    return F3;
}
f8.e = f8;
Object.defineProperty(F3, "e", { get: f7, set: f8 });
