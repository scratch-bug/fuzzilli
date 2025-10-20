function f0(a1) {
    const v3 = arguments.length;
    function f4() {
        return f0;
    }
    return f4.hasOwnProperty(v3);
}
f0(f0);
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
