const v0 = async () => {
    const v18 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,124,7]);
    try {
        await WebAssembly.instantiate(v18);
    } catch(e22) {
    }
    return 97;
};
v0();
