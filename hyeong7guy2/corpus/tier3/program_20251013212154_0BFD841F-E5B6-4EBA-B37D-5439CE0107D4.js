const v0 = async () => {
    let v12 = 1;
    v12--;
    const v19 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,v12,96,1,124,0]);
    try {
        await WebAssembly.instantiate(v19);
    } catch(e23) {
    }
    return 0;
};
v0();
