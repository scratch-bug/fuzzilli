function f0(a1) {
    arguments.b = arguments;
    function f3() {
        return arguments;
    }
    Object.defineProperty(a1, 2, { configurable: true, get: f3 });
    return f0;
}
f0(f0(f0));
%OptimizeFunctionOnNextCall(f0);
f0(f0);
