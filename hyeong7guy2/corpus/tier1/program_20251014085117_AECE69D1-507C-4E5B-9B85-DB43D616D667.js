const v0 = async () => {
    const v3 = new Uint8Array(2);
    try {
        await WebAssembly.instantiate(v3);
    } catch(e7) {
    }
    return v0;
};
v0();
