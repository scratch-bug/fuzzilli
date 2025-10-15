function f0(a1) {
    function f3() {
        return a1;
    }
    Object.defineProperty(arguments, 2, { configurable: true, get: f3 });
    return arguments;
}
const v4 = f0(f0);
v4[0] = v4;
