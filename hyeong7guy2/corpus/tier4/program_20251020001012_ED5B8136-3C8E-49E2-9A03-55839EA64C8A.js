for (let v0 = 0; v0 < 10; v0++) {
    let v23 = 128;
    v23--;
    const v26 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,v0,v0,0,0,128,128,128,v23]);
    try {
        const t5 = WebAssembly.Module;
        new t5(v26);
    } catch(e30) {
    }
}
