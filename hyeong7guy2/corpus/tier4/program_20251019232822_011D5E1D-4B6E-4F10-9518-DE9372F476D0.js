for (let v2 = 0; v2 < 5; v2++) {
    const v26 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,v2,1024,0,1000,128,128,128,128]);
    try {
        const t3 = WebAssembly.Module;
        new t3(v26);
    } catch(e30) {
    }
}
