function f2(a3) {
    Object.defineProperty(arguments, 2, { configurable: true, value: Float64Array });
    return arguments;
}
f2(991)[0];
for (let i9 = 0, i10 = 10; i10; i10--) {
}
