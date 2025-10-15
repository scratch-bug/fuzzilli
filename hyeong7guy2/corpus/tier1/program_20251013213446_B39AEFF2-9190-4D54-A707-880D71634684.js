const v0 = [];
function f1() {
    return f1;
}
function f2(a3) {
    return f1;
}
Object.defineProperty(v0, 9, { configurable: true, get: f1, set: f2 });
function f4(a5) {
    return a5;
}
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
}
const v10 = Symbol.toPrimitive;
F6[v10] = f4;
const v14 = {
    o(a12, a13) {
        super[F6] = a13;
        return v10;
    },
};
v14.string = f2;
v14.o();
