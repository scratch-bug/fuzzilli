function f2(a3, a4) {
    const v9 = {
        construct: f2,
        construct(a6, a7) {
            return a7;
        },
        [Symbol]() {
            super.g %= 3498;
        },
    };
    return a4;
}
new Worker(f2, { type: "function" });
