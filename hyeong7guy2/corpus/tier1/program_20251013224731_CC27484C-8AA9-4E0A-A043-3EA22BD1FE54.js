function f0() {
    return f0;
}
try {
    for (let i2 = 0;
        (() => {
            const v4 = i2 < 100000;
            const v5 = {};
            return v4;
        })();
        ++i2) {
    }
    const v9 = { get: f0 };
} catch(e10) {
}
