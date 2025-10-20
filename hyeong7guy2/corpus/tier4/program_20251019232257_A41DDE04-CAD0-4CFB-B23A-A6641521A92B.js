try {
    let v11 = 96;
    v11++;
    const v16 = new Uint8Array([0,97,115,109,1,0,0,0,4,4,1,v11,0,0]);
    const t4 = WebAssembly.Module;
    new t4(v16);
} catch(e20) {
}
