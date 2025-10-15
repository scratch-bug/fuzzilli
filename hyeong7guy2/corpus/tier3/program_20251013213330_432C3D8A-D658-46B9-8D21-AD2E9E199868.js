const v0 = async () => {
    for (let i2 = 0; i2 < 20000;) {
        i2 * i2;
        ++i2;
    }
    return await WebAssembly;
};
v0();
