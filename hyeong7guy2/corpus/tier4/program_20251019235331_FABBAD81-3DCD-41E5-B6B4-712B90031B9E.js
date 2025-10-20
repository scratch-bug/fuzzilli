function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        const v39 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
        v39[26] = v39;
        const t5 = WebAssembly.Module;
        new t5(v39);
    } catch(e42) {
    }
}
new F0();
