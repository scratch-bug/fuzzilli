function f1() {
    return 2141040266;
}
try {
    const v36 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
    v36.valueOf = f1;
    v36[31] = v36;
    const t7 = WebAssembly.Module;
    new t7(v36);
} catch(e40) {
}
