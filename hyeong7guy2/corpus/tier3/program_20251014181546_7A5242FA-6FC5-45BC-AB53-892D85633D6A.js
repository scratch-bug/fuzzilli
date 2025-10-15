function f1(a2) {
    Object.defineProperty(arguments, 1, { configurable: true, enumerable: true, value: -4.0 });
    return arguments[1];
}
f1(f1);
