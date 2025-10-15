try {
    const v34 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
    const t2 = WebAssembly.Module;
    const v37 = new t2(v34);
    const t4 = WebAssembly.Instance;
    const v39 = new t4(v37);
    const t6 = v39.exports.f;
    t6();
} catch(e43) {
}
