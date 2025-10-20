for (let v1 = 0; v1 < 10; v1++) {
    const v25 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,v1,v1,0,1000,128,128,128,128]);
    try {
        const t3 = WebAssembly.Module;
        new t3(v25);
    } catch(e29) {
    }
}
