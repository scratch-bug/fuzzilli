try {
    new WeakMap();
    for (let v10 = 0; v10 < 10; v10++) {
        ++v10;
    }
    const v43 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
    v43[31] = v43;
    const t7 = WebAssembly.Module;
    new t7(v43);
} catch(e47) {
}
