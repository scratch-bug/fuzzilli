try {
    const v34 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
    function f35(a36, a37) {
        return 109;
    }
    v34[Symbol.toPrimitive] = f35;
    v34[31] = v34;
    const t7 = WebAssembly.Module;
    new t7(v34);
} catch(e43) {
}
