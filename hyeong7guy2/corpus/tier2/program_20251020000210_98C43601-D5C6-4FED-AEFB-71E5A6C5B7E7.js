function f0(a1, a2) {
    return a2;
}
function f3(a4, a5) {
    a5 >>> a5;
    const v9 = new Int16Array();
    const v10 = v9.length;
    const v11 = { millisecond: v10 };
    arguments.o = f0;
    return f3;
}
f3();
f3();
%OptimizeMaglevOnNextCall(f3);
f3();
