function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F1();
function f8() {
    return v7;
}
function f10() {
    return F1;
}
f10.prototype = f10;
function f11(a12, a13, a14) {
    a12[Symbol.replace];
    return f11;
}
f11(Math);
const v19 = f11(v7);
v19(3);
v19(f8);
f11(f10);
%OptimizeFunctionOnNextCall(f11);
f11(v7);
