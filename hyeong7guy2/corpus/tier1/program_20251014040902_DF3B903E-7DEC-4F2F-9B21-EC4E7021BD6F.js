function f0(a1) {
    arguments.b = arguments;
    function f3() {
        return f0;
    }
    Object.defineProperty(arguments, 2, { configurable: true, get: f3 });
    return a1;
}
f0();
