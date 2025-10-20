try {
    let v28 = 10;
    v28++;
    let v31 = 1;
    v31++;
    let v33 = 2;
    v33--;
    const v38 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,v28,4,v31,v33,0,11]);
    const t8 = WebAssembly.Module;
    new t8(v38);
} catch(e41) {
}
