function f1() {
    const v2 = new Date();
    v2.getSeconds();
    return f1;
}
f1();
f1();
%OptimizeMaglevOnNextCall(f1);
f1();
