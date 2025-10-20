try {
    let v12 = 96;
    v12--;
    const v22 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,v12,1,123,0,3,2,1,0]);
    const t4 = WebAssembly.Module;
    new t4(v22);
} catch(e26) {
}
