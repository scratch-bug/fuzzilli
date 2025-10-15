function f1(a2) {
    Object.defineProperty(arguments, 2, { configurable: true, value: Float64Array });
    for (const v4 in arguments) {
    }
    return Float64Array;
}
f1(f1);
for (let i8 = 0, i9 = 10; i9; i9--) {
}
