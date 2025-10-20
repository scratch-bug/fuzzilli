const v1 = async () => {
    const v14 = new Uint8Array([0,97,115,109,1,0,0,0,1,257,1]);
    try {
        await WebAssembly.instantiate(v14);
    } catch(e18) {
    }
    return 0;
};
v1();
