try {
    let v18 = 1;
    v18--;
    let v23 = 0;
    v23--;
    const v27 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,v18,109,1,102,v23,0]);
    v27[18] = v27;
    const t7 = WebAssembly.Module;
    new t7(v27);
} catch(e31) {
}
