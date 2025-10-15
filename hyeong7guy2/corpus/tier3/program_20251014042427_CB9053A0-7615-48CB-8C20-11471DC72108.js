class C1 {
}
function f2(a3) {
}
C1.constructor = f2;
const v4 = C1.constructor;
function f5(a6) {
    return v4;
}
const v7 = {};
v7.defineProperty = v4;
function f9() {
    return C1;
}
const v10 = new Proxy(f9, v7);
v10[Symbol] = f5;
