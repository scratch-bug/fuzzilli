try {
    let v20 = 7;
    v20++;
    const v24 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,v20,0]);
    const t4 = WebAssembly.Module;
    new t4(v24);
} catch(e28) {
}
