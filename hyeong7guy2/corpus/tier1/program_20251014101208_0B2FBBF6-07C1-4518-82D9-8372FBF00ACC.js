for (let i2 = 0;
    (() => {
        Symbol.defineProperty = Symbol;
        return i2 < 20000;
    })();
    ) {
    const t6 = Array(0);
    t6[0] = 9007199254740991;
    i2++;
}
