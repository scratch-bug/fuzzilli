function f2(a3) {
    Object.defineProperty(arguments, 2, { configurable: true, value: Float64Array });
    return arguments;
}
const v5 = f2(991);
v5[0] = v5;
for (let i8 = 0, i9 = 10; i9; i9--) {
}
