try {
    let v19 = 109;
    v19--;
    const v36 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,v19,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
    const t4 = WebAssembly.Module;
    const v39 = new t4(v36);
    const v40 = {};
    v40.l = 115;
    const t8 = WebAssembly.Instance;
    new t8(v39, v40);
} catch(e43) {
}
