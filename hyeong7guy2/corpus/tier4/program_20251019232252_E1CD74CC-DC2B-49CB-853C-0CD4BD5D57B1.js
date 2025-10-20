function f1(a2) {
    function f4() {
        return f4;
    }
    f4.apply(4, arguments);
    return f4;
}
const v6 = f1();
f1(4);
%OptimizeFunctionOnNextCall(f1);
f1(v6);
