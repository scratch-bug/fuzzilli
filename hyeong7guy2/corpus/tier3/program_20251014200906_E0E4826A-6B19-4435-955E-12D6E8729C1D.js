const v1 = async () => {
    let v11 = 1;
    const v13 = v11--;
    const v15 = new Uint8Array([0,97,115,109,1,0,0,0,v11,257,1]);
    try {
        await WebAssembly.instantiate(v15);
    } catch(e19) {
    }
    return v13;
};
v1();
