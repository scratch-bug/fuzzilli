function f1(a2) {
    Object.defineProperty(arguments, 2, { configurable: true, value: Float64Array });
    return arguments[2];
}
f1();
