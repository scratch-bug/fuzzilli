try {
    const v36 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,1]);
    function f37(a38, a39) {
        return 2628;
    }
    v36[Symbol.toPrimitive] = f37;
    v36[31] = v36;
    const t7 = WebAssembly.Module;
    new t7(v36);
} catch(e44) {
}
