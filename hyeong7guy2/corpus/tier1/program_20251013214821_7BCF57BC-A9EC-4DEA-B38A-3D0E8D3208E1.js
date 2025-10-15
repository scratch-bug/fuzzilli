for (let v1 = 0; v1 < 5; v1++) {
    Symbol[Symbol.toPrimitive] = Symbol;
    const v9 = {
        n(a4, a5, a6, a7) {
            return a6;
        },
        [Symbol]() {
        },
    };
}
