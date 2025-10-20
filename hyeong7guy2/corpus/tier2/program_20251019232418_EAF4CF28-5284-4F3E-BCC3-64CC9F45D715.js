let v0 = 2192;
v0++;
try {
    const v37 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,7,5,1,1,102,0,0,10,4,1,2,0,11]);
    function f38(a39) {
        return v0;
    }
    Object.defineProperty(v37, "valueOf", { writable: true, value: f38 });
    v37[31] = v37;
    const t9 = WebAssembly.Module;
    new t9(v37);
} catch(e42) {
}
