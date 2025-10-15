function f0(a1) {
    function f3() {
        return arguments;
    }
    Object.defineProperty(arguments, 2, { configurable: true, get: f3 });
    return arguments;
}
for (const v5 of f0(f0)) {
}
