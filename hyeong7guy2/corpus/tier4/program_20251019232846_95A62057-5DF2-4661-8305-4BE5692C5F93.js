const v1 = Array();
function f2(a3, a4) {
    const v5 = a4++;
    return v5 >>> v5;
}
function f7(a8, a9) {
    a9.prototype = a9;
    a8.constructor(v1);
    arguments.o = f2;
    arguments["o"]();
    return f7;
}
const v14 = f7(f2, f7);
v14.prototype(v1, v14);
%OptimizeMaglevOnNextCall(f7);
f7(f2, v14);
