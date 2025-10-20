function f0() {
}
try {
    const v4 = {
        [Symbol]() {
        },
    };
    new Int16Array();
    for (let i9 = 0;
        (() => {
            const v11 = i9 < 100000;
            const v12 = {};
            return v11;
        })();
        ++i9) {
    }
    const v16 = { get: f0 };
} catch(e17) {
}
