for (let v1 = 0; v1 < 10; v1++) {
    let v20 = 0;
    v20--;
    const v26 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,v1,v1,0,v20,128,128,128,47]);
    try {
        const t5 = WebAssembly.Module;
        new t5(v26);
    } catch(e30) {
    }
}
