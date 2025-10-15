function f1() {
    const v2 = new Date();
    return v2.getMilliseconds();
}
f1();
f1();
%OptimizeFunctionOnNextCall(f1);
f1();
