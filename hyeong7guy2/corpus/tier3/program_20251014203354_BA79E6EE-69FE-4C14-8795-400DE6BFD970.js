function f0(a1) {
    const v3 = arguments.length;
    function f4() {
        return f0;
    }
    f4.length;
    [v3];
    return arguments;
}
f0(f0(f0));
%OptimizeFunctionOnNextCall(f0);
f0(f0);
