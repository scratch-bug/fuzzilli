try {
    const v35 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
    function f36() {
        return 102;
    }
    v35[Symbol.toPrimitive] = f36;
    v35[31] = v35;
    const t7 = WebAssembly.Module;
    new t7(v35);
} catch(e41) {
}
