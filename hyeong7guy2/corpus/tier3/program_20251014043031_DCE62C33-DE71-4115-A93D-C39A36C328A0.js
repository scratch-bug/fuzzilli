try {
    for (let v1 = 0; v1 < 5; v1++) {
        const v24 = new Uint8Array([0,97,115,109,1,0,0,0,v1,4,1,96,0,0,2,7,1,1,1000,1,102,0,1000]);
        const t3 = WebAssembly.Module;
        new t3(v24);
    }
} catch(e28) {
}
