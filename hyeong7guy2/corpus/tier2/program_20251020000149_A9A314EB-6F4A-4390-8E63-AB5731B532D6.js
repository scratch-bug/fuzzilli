function f0(a1) {
    arguments.b = arguments;
    function f3() {
        return f3;
    }
    [1];
    const v6 = [1];
    const v7 = v6.push(v6, 1, v6);
    v7 * v7;
    Object.defineProperty(arguments, 2, { configurable: true, get: f3 });
    return f0;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
