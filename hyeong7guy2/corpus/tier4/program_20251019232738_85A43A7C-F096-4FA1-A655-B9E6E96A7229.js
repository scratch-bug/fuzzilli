const v0 = class {
}
function f1(a2, a3) {
    a3 - a3;
    a3--;
    a3 | a3;
    arguments[1];
    arguments[1] = arguments;
    return a3;
}
const v9 = f1(v0, v0);
const v10 = f1(v9, v9);
%OptimizeMaglevOnNextCall(f1);
f1(v10, v10);
