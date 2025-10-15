function f1(a2) {
    function f4() {
        return f4;
    }
    f4.apply(4, arguments);
    return arguments;
}
f1(f1);
const v7 = f1();
%OptimizeFunctionOnNextCall(f1);
f1(v7);
