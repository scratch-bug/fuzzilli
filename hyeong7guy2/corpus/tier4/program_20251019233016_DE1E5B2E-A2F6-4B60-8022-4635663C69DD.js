try {
    let v16 = 3;
    v16++;
    const v20 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,v16,2147483648]);
    const t4 = WebAssembly.Module;
    new t4(v20);
} catch(e24) {
}
