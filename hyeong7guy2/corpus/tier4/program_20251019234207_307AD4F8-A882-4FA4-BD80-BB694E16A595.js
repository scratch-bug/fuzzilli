function f1() {
    const v2 = new Date(Date);
    v2.getSeconds();
    return Date;
}
f1();
f1();
%OptimizeFunctionOnNextCall(f1);
f1();
