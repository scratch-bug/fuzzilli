try {
    let v28 = 10;
    v28++;
    let v32 = 2;
    v32--;
    const v37 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,v28,4,1,v32,0,11]);
    const t6 = WebAssembly.Module;
    new t6(v37);
} catch(e40) {
}
